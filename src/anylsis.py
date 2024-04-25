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

    df['create_time'] = df['create_time'].apply(lambda x: dt.datetime.fromtimestamp(x).strftime("%m月"))
    month_ls = df.groupby('create_time')
    results = {}
    for month in month_ls:
        data = month[1].drop_duplicates()
        data['content'] = data['content'] \
                        .apply(str) \
                        .apply(lambda x: re.sub(r'@[^ ]+ ?', '', x)) \
                        .apply(lambda x: re.sub(r'\[[^\]]+\]', '', x)) \
                        .apply(lambda x: '' if len(x) < 10 else x) \
                        .dropna()
                        
        data = data[data['content'] != '']
        texts = data['content'].tolist()
        names = data['nickname'].tolist()
        # 进行情感分析
        result = senta.sentiment_classify(texts=texts[:num])

        results[month[0]] = {}
        results[month[0]]['特别好评'] = []
        results[month[0]]['好评'] = []
        results[month[0]]['中评'] = []
        results[month[0]]['差评'] = []
        results[month[0]]['特别差评'] = []

        for i, k in enumerate(result):
            val = (names[i], k['text'])
            if k['positive_probs'] >= 0.8:
                results[month[0]]['特别好评'].append(val)
            elif k['positive_probs'] >= 0.55:
                results[month[0]]['好评'].append(val)
            elif k['positive_probs'] >= 0.3:
                results[month[0]]['中评'].append(val)
            elif k['positive_probs'] >= 0.08:
                results[month[0]]['差评'].append(val)
            else:
                results[month[0]]['特别差评'].append(val)

        # results[month[0]] = result
        for key in results[month[0]]:
            print(month[0], len(results[month[0]][key]), '条', key)
            for sentence in results[month[0]][key][:1]:
                
                print(month[0], sentence[0], '给出', key, sentence[1])

        # 输出结果
        # print(month[0], result[:5], sep='\n')

    return results

if __name__ == '__main__':
    senta()