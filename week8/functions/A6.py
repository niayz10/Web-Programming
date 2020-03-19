def int_min(a, b, c, d):
    min = 0
    min2 = 0
    if a > b:
        min = b
    else:
        min = a
    if c > d:
        min2 = d
    else:
        min2 = c
    if min > min2:
        return min2
    else:
        return min


a = [int(i) for i in input().split()]
print(int_min(a[0], a[1], a[2], a[3]))
