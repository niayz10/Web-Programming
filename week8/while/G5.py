n = int(input())
if 1 <= n <= 35:
    a = [int(i) for i in input().split()]
b = len(a)
x = 0
for i in range(0, int(b / 2)):
    x = a[i]
    a[i] = a[b - i-1]
    a[b - i-1] = x
for i in range(0, b):
    print(a[i], end=' ')

