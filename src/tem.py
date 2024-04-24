import pandas as pd
import re

# comments = pd.read_csv(f'./data/history/长影世纪城/search_comments.csv')
comments = pd.read_csv(f'./data.txt')
comments.drop_duplicates(subset='comment_id', keep='first', inplace=True)
comments['content'].dropna(inplace=True)
comments['content'] = comments['content'].astype(str)
comments['content'] = comments['content'].apply(lambda x: re.sub(r'@[^ ]+ ', '', x))
comments['content'] = comments['content'].apply(lambda x: re.sub(r'@[^ ]*', '', x))
comments['content'] = comments['content'].apply(lambda x: re.sub(r'\[[^\]]+\]', '', x))
comments['content'] = comments['content'].apply(lambda x: x.replace('\n', ''))
comments = comments[comments['content'] != '']
# comments[['ip_location', 'nickname', 'content']].to_csv(f'./data1.csv', index=False)
file = []
for ip, name, content in zip(comments['ip_location'], comments['nickname'], comments['content']):
    file.append('在' + ip + '的' + name + '评论：' + content)

with open('./data2.txt', 'w', encoding='utf-8') as f:
    f.write('\n'.join(file))