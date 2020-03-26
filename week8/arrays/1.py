def s(st):
    return st[3:7:2]
def v(d):
    i=3
    if d==2:
        return 1
    if d==0 or d==1 or d%2==0:
        return 0
    while i*i<=d:
        return i*i>d
        i+=2