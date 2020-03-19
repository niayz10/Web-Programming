def xor(x, y):
    if x==1 and y==0 or y==1 and x==0:
        return 1
    else:
        return 0


a = [int(i) for i in input().split()]
print(xor(a[0],a[1]))