# 更改工作目录
import os

os.chdir(os.path.dirname(__file__))

# 系统标准库
import time as t
import datetime as dt
import random as r

# 依赖库
import numpy as np
import pandas as pd

# 自定义库
from src import sol_keyword, location, info, anylsis

info.sys_info('读取index_o.html')
info.gap()

with open('index_o.html', 'r', encoding='utf-8') as f:
    html = f.readlines()


info.sys_info('读取视频数据')
info.gap()

key = info.sys_in('输入关键字:')
try:
    contents = pd.read_csv(f'./data/history/{key}/search_contents.csv')
except FileNotFoundError:
    print(f'未获取{key}的历史视频数据')
    t.sleep(3)
    exit()
contents.drop_duplicates(subset='aweme_id', keep='first', inplace=True)

info.sys_info('读取评论数据')
info.gap()

comments = pd.read_csv(f'./data/history/{key}/search_comments.csv')
comments.drop_duplicates(subset='comment_id', keep='first', inplace=True)

ky = 0
cm1, cm2, cm3, cm4 = 0, 0, 0, 0
tm, st, ed = 0, 0, 0
ip1, ip2 = 0, 0
md1, md3, md3 = 0, 0, 0
kw, kw2 = 0, 0
at = 0
v1, v2, v3, v4, v5 = [0] * 5
for i, line in enumerate(html):
    if line.strip() == '<!-- keyword -->':
        ky = i
    if line.strip() == '<!-- time -->':
        tm = i
    if line.strip() == '<!-- vocal -->':
        st = i
    if line.strip() == '<!-- end vocal -->':
        ed = i
    if line.strip() == '// ip_data1':
        ip1 = i
    if line.strip() == '// ip_data2':
        ip2 = i
    if line.strip() == '// month_data1':
        md1 = i
    if line.strip() == '// month_data2':
        md2 = i
    if line.strip() == '// month_data3':
        md3 = i
    if line.strip() == '// keyword_data':
        kw = i
    if line.strip() == '// keyword_data2':
        kw2 = i
    if line.strip() == '<!-- comment1 -->':
        cm1 = i
    if line.strip() == '<!-- comment2 -->':
        cm2 = i
    if line.strip() == '<!-- comment3 -->':
        cm3 = i
    if line.strip() == '<!-- comment4 -->':
        cm4 = i
    if line.strip() == '// v1':
        v1 = i
    if line.strip() == '// v2':
        v2 = i
    if line.strip() == '// v3':
        v3 = i
    if line.strip() == '// v4':
        v4 = i
    if line.strip() == '// v5':
        v5 = i

# print(tm, st, ed)

html[ky + 1] = f'               <p class="fl">关键字：{key}</p>\n'

ls = []
i = 0

# 时间段
html[tm + 1] = f'       <p class="fr">时间:{dt.datetime.fromtimestamp(min(contents.create_time)).strftime("%Y-%m")}至{dt.datetime.fromtimestamp(max(contents.create_time)).strftime("%Y-%m")}</p>\n'

video = contents.copy()
video.sort_values(by='create_time', inplace=True, ascending=False)


now = max(comments['create_time']) - 24 * 60 * 60 * 1
delta = 30 * 24 * 60 * 60

num = len(comments.loc[(comments['create_time'] >= now - delta * 2) & (comments['create_time'] < now)])
info.sys_info(f'计算评论数据, 数据共{num}条')
info.gap()

# 1-31天内评论数据
df_filtered = comments.loc[(comments['create_time'] >= now - delta * 1) & (comments['create_time'] < now)]
# print(df_filtered['create_time'].apply(lambda x: dt.datetime.fromtimestamp(x).strftime("%Y-%m-%d")))

# 30天-60天内评论
df_filtered2 = comments.loc[(comments['create_time'] >= now - delta * 2) & (comments['create_time'] < now - delta * 1)]

sum1 = len(df_filtered)
sum2 = len(df_filtered2)
k = (sum1 - sum2) / sum2 * 100
info.sys_info(sum1, sum2)
info.sys_info('环比变化', k, '%')
info.gap()
html[cm1 + 1] = f'''          <h3 class="ceeb1fd">{sum1}</h3>
          <h4 class="text-muted">环比<img src="img/{'iconup' if k > 0 else 'icondown'}.png" height="16" />{k:.2f}%</h4>\n'''

sum_re1 = df_filtered['sub_comment_count'].sum()
sum_re2 = df_filtered2['sub_comment_count'].sum()
k2 = (sum_re1 - sum_re2) / sum_re2 * 100
info.sys_info(sum_re1, sum_re2)
info.sys_info('环比变化', k2, '%')
info.gap()
html[cm2 + 1] = f'''          <h3 class="c24c9ff">{int(sum_re1)}</h3>
          <h4 class="text-muted">环比<img src="img/{'iconup' if k2 > 0 else 'icondown'}.png" height="16" />{k2:.2f}%</h4>\n'''

info.sys_info('评论数据计算完成')

num = len(contents.loc[(contents['create_time'] >= now - delta * 2) & (contents['create_time'] < now)])
info.sys_info(f'计算视频数据, 数据共{num}条')
info.gap()

# 视频数据
df_filtered_c = contents.loc[(contents['create_time'] >= now - delta * 1) & (comments['create_time'] < now)]
df_filtered_c2 = contents.loc[(contents['create_time'] >= now - delta * 2) & (comments['create_time'] < now - delta * 1)]
sum_lk1 = df_filtered_c['liked_count'].sum()
sum_lk2 = df_filtered_c2['liked_count'].sum()
k3 = (sum_lk1 - sum_lk2) / sum_lk2 * 100
info.sys_info(sum_lk1, sum_lk2)
info.sys_info('环比变化', k3, '%')
info.gap()
html[cm3 + 1] = f'''         <h3 class="cffff00">{sum_lk1}</h3>
          <h4 class="text-muted">环比<img src="img/{'iconup' if k3 > 0 else 'icondown'}.png" height="16" />{k3:.2f}%</h4>'''

sum_sh1 = df_filtered_c['share_count'].sum()
sum_sh2 = df_filtered_c2['share_count'].sum()
k4 = (sum_sh1 - sum_sh2) / sum_sh2 * 100
info.sys_info(sum_sh1, sum_sh2)
info.sys_info('环比变化', k4, '%')
info.gap()
html[cm4 + 1] = f'''         <h3 class="c11e2dd">{sum_sh1}</h3>
          <h4 class="text-muted">环比<img src="img/{'iconup' if k4 > 0 else 'icondown'}.png" height="16" />{k4:.2f}%</h4>'''

info.sys_info('视频数据计算完成')

# 视频
for name, url, line, time in zip(video['nickname'], video['aweme_url'], video['desc'], video['create_time']):
    k = f'''
            <li {'' if i % 2 == 0 else 'class="bg"'}>
                <p class="fl"><b>{name}</b><br>
                    <p class="fr pt17">{dt.datetime.fromtimestamp(time).strftime("%Y-%m-%d %H:%M")}</p>
                    <i><a class='aaa' href={url}>{line}</a></i><br>
                </p>
            </li>'''
    ls.append(k)
    i += 1
    # print(k)

info.sys_info('IP地址统计')
info.gap()
# ip统计
ip_ls = comments['ip_location'].value_counts()[:8]
print(ip_ls)
d = "'"
html[ip1 + 1] = f"data: [{', '.join(d + ip_ls.index + d)}]\n"

html[ip2 + 1] = ',\n'.join(["{" + f" value : {num}, name : {d + ip + d} " + "}" for ip, num in ip_ls.items()]) + '\n'

info.sys_info('计算各月热度')
info.gap()
# 月份统计
month_ls = comments['create_time'].apply(lambda x: dt.datetime.fromtimestamp(x).strftime("%m月")).value_counts().sort_index()
info.sys_info('各月评论数', month_ls)
html[md1 + 1] = f"data: [{', '.join(map(str, month_ls))}]\n"

comments['create_time_gp'] = comments['create_time'].apply(lambda x: dt.datetime.fromtimestamp(x).strftime("%m月"))
month_sub = comments.groupby('create_time_gp')['sub_comment_count'].sum()
info.sys_info('各月回复数\n', month_sub)
html[md2 + 1] = f"data: [{', '.join(map(str, month_sub))}]\n"

contents['create_time_gp'] = contents['create_time'].apply(lambda x: dt.datetime.fromtimestamp(x).strftime("%m月"))
month_lk = contents.groupby('create_time_gp')['liked_count'].sum().apply(lambda x: pow(x, 0.5) * 2)
info.sys_info('各月点赞数\n', month_lk)
html[md3 + 1] = f"data: [{', '.join(map(str, month_lk))}]\n"

info.sys_info('关键字词频统计')
info.gap()
# 词频统计
kw_ls = sol_keyword.sol_key(comments['content'].dropna())
info.sys_info('关键字词频\n', kw_ls)

html[kw + 1] = f"data: [{d + f'{d}, {d}'.join(kw_ls.keys()) + d}]\n"
html[kw2 + 1] = ',\n'.join(["{" + f" value : {num}, name : {d + word + d} " + "}" for word, num in kw_ls.items()]) + '\n'



info.sys_info('感情极性分析')
info.gap()
results = anylsis.senta(key, 1000)

with open('anylsis_o.html', 'r', encoding='utf-8') as f:
    anylsis_data = f.readlines()

pos1, pos2, pos3, pos4, pos5 = 0, 0, 0, 0, 0
for i, line in enumerate(anylsis_data):
    if line.strip() == '// vg':
        pos1 = i
    if line.strip() == '// g':
        pos2 = i
    if line.strip() == '// mid':
        pos3 = i
    if line.strip() == '// n':
        pos4 = i
    if line.strip() == '// vn':
        pos5 = i

rsls = {}
sum_ls = []
for label in ['特别好评', '好评', '中评', '差评', '特别差评']:
    rsls[label] = []
    sum_ls.append([len(results[x][label]) for x in results])
# print(sum_ls)

html[v1 + 1] = 'data :' + str(sum_ls[0])
html[v2 + 1] = 'data :' + str(sum_ls[1])
html[v3 + 1] = 'data :' + str(sum_ls[2])
html[v4 + 1] = 'data :' + str(sum_ls[3])
html[v5 + 1] = 'data :' + str(sum_ls[4])

for month in results:
    for key in results[month]:
        for sentence in results[month][key]:
            k = '{' + f' author: "{sentence[0]}", comment: "{sentence[1]}", ip: "在 {sentence[2]}", time: "{sentence[4]}", score: "{sentence[3] * 100}"' + '}'
            rsls[key].append(k)


anylsis_data[pos1 + 1] = ',\n'.join(rsls['特别好评'])
anylsis_data[pos2 + 1] = ',\n'.join(rsls['好评'])
anylsis_data[pos3 + 1] = ',\n'.join(rsls['中评'])
anylsis_data[pos4 + 1] = ',\n'.join(rsls['差评'])
anylsis_data[pos5 + 1] = ',\n'.join(rsls['特别差评'])

info.sys_info('写入到anylsis.html')
info.gap()

with open('anylsis.html', 'w', encoding='utf-8') as f:
    f.writelines(anylsis_data)

info.sys_info('写入完成')
info.gap()


info.sys_info('写入到index.html')
info.gap()

# 保存到index
with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(html[:st+1])
    f.writelines(ls)
    f.writelines(html[ed:])

info.sys_info('写入完成')


info.sys_info('更新链接')
info.gap()

# link网页列表
i = 0
lst = []
link = pd.read_csv('./data/web_ls/link.txt')
for name, url in zip(link['name'], link['url']):
    k = f'''
            <li {'' if i % 2 == 0 else 'class="bg"'}>
                    <i><a class='aaa' href='{url}'>{name}</a></i><br>
                </p>
            </li>'''
    lst.append(k)
    i += 1

with open('link_o.html', 'r', encoding='utf-8') as f:
    lk_data = f.readlines()

info.sys_info('更新完成')

kk = 0
for i, line in enumerate(lk_data):
    if line.strip() == '<!-- link -->':
        kk = i

lk_data[kk + 1] = '\n'.join(lst)

with open('link.html', 'w', encoding='utf-8') as f:
    f.writelines(lk_data)

# 热力图点数据
with open('js/baidu_o.js', 'r', encoding='utf-8') as f:
    js_data = f.readlines()

pt = 0
for i, line in enumerate(js_data):
    if line.strip() == '// points_data':
        pt = i

info.sys_info('计算热力图点位置')
info.gap()

locate = comments['ip_location'].apply(lambda x: location.sol_location(x)).value_counts()
dic = locate.to_dict()
loc_ls = []
for k, v in dic.items():
    loc_ls.append('     {' + f' "count" : {v * 50}, "lat" : {k[1]}, "lng" : {k[0]} ' + '}')
et = '\n'
js_data[pt + 1] = f'{f", {et}".join(map(str, loc_ls))},\n'

info.sys_info('位置信息\n', '\n'.join(loc_ls[:8]))

info.sys_info('写入到baidu.js')
info.gap()

with open('js/baidu.js', 'w', encoding='utf-8') as f:
    f.writelines(js_data)

info.sys_info('写入完成')

with open('./js/cloud_o.js', 'r', encoding='utf-8') as f:
    cl_data = f.readlines()

info.sys_info('生成词云图')
info.gap()
cl = 0
for i, line in enumerate(cl_data):
    if line.strip() == '// cloud':
        cl = i
keyw = sol_keyword.sol_key(comments['content'].dropna(), 120)
info.sys_info('词云词频\n', keyw)

cl_data[cl + 1] = ',\n'.join(["{" + f" value : {num * 10}, name : {d + word + d} " + "}" for word, num in keyw.items()]) + '\n'

info.sys_info('写入到cloud.js')
info.gap()

with open('./js/cloud.js', 'w', encoding='utf-8') as f:
    f.writelines(cl_data)

info.sys_info('写入完成')
info.gap()