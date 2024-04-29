import paddlehub as hub
import pandas as pd
import re
import os
import datetime as dt

def senta(locate='净月潭', num=1000):
    # 加载SENTA情感分析预训练模型
    senta = hub.Module(name="senta_bilstm")

    fp = f'./data/history/{locate}/search_comments.csv'
    pd.set_option('display.encoding', 'utf-8')
    # print(os.getcwd())
    with open(fp, 'r', encoding='utf-8') as f:
        df = pd.read_csv(f, encoding='UTF-8')

    df['create'] = df['create_time'].apply(lambda x: dt.datetime.fromtimestamp(x).strftime("%m月"))
    month_ls = df.groupby('create')
    results = {}
    for month in month_ls:
        data = month[1].drop_duplicates()
        data['content'] = data['content'] \
                        .apply(str) \
                        .apply(lambda x: re.sub(r'@[^ ]+ ?', '', x)) \
                        .apply(lambda x: re.sub(r'\[[^\]]+\]', '', x)) \
                        .apply(lambda x: x.replace('\n', '')) \
                        .apply(lambda x: x.replace('"', '')) \
                        .apply(lambda x: x.replace('\\', '')) \
                        .apply(lambda x: '' if len(x) < 10 or '活跃账号' in x else x)
        
        data = data.dropna(subset=['content'])

        data['nickname'] = data['nickname'] \
                    .apply(lambda x: str(x).replace('"', ''))     \
                    .apply(lambda x: x.replace('\\', '')) 
        data = data[data['content'] != '']
        texts = data['content'].tolist()
        names = data['nickname'].tolist()
        ips = data['ip_location'].tolist()
        times = data['create_time'].tolist()
        # 进行情感分析
        result = senta.sentiment_classify(texts=texts[:num])

        results[month[0]] = {}
        results[month[0]]['特别好评'] = []
        results[month[0]]['好评'] = []
        results[month[0]]['中评'] = []
        results[month[0]]['差评'] = []
        results[month[0]]['特别差评'] = []

        for i, k in enumerate(result):
            time = dt.datetime.fromtimestamp(times[i]).strftime("%Y-%m-%d %H:%M:%S")
            val = (names[i], k['text'], ips[i], k['positive_probs'], time)
            if k['positive_probs'] >= 0.8:
                results[month[0]]['特别好评'].append(val)
            elif k['positive_probs'] >= 0.55:
                results[month[0]]['好评'].append(val)
            elif k['positive_probs'] >= 0.25:
                results[month[0]]['中评'].append(val)
            elif k['positive_probs'] >= 0.07:
                results[month[0]]['差评'].append(val)
            else:
                results[month[0]]['特别差评'].append(val)

        # results[month[0]] = result
        for key in results[month[0]]:
            print(month[0], len(results[month[0]][key]), '条', key)
            for sentence in results[month[0]][key][:1]:
                
                print(month[0], sentence[0], f'在 {sentence[2]} 给出', key, sentence[1])

    return results

def classify():
    text_cls_model = hub.Module(name="text_classification_model")

    # 定义要分类的评论文本
    comment1 = "这家餐厅的环境非常不错,菜品很美味,服务也很周到,总的来说是一次非常愉快的就餐体验。"
    comment2 = "这家酒店的位置很好,房间很干净整洁,服务人员也很热情周到,下次还会再来住。"
    comment3 = "这件衣服的面料手感很好,款式也很时尚,性价比很高,非常喜欢。"

    # 对评论文本进行领域分类
    result1 = text_cls_model.classify(texts=[comment1])
    result2 = text_cls_model.classify(texts=[comment2])
    result3 = text_cls_model.classify(texts=[comment3])

    # 输出分类结果
    print("评论1的领域:", result1[0]['label'])
    print("评论2的领域:", result2[0]['label'])
    print("评论3的领域:", result3[0]['label'])

if __name__ == '__main__':
    # classify()
    senta()
