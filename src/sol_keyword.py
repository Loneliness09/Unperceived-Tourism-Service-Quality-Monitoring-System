import jieba.analyse
import nltk
import jieba
import pandas as pd
from nltk.corpus import stopwords
from collections import Counter
import re

def sol_key(text_df, num=8):

    # 下载中文停用词
    nltk.download('stopwords')
    text_df = text_df.astype(str)
    # 加载中文停用词表
    stop_words = set(stopwords.words('chinese'))
    stop_words |= {'一个', '真的', '感觉', '去过', '地方', '两个', '这次', '进去', '感受'}

    text_ls = (map(lambda x: re.sub(r'@[^ ]+ ', '', x), text_df))
    text_ls = (map(lambda x: re.sub(r'\[[^\]]+\]', '', x), text_ls))
    text_ls = (map(lambda x: re.sub(r'\s', '', x), text_ls))
    # 分词并去除停用词
    text = ' '.join(text_ls)
    seg_list = jieba.cut(text)
    filtered_words = [word for word in seg_list if word not in stop_words and len(word) > 1 and not word.isdigit()]

    # 统计词频
    word_counts = Counter(filtered_words)

    # 打印关键字及其词频
    i = 0
    r = {}
    for word, count in word_counts.most_common():

        print(f'{word}: {count}')
        r[word] = count
        i += 1
        if i >= num:
            return r
    return r

if __name__ == '__main__':
    sol_key('好好学习，天天向上')
    