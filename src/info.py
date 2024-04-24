import time as t
import datetime as dt
import random as r

def sys_info(info, *args):
    print(f'{dt.datetime.fromtimestamp(t.time()).strftime("%Y-%m-%d %H:%M:%S")} [INFO]', str(info), ' '.join(map(str, args)))

def sys_in(info, *args):
    return input(f'{dt.datetime.fromtimestamp(t.time()).strftime("%Y-%m-%d %H:%M:%S")} [INPUT] ' + str(info) + ' ' + ' '.join(map(str, args)))

def gap():
    t.sleep(r.randint(4, 40) / 100)