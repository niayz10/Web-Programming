a = int(input())
b = int(input())
if a <= b:
    for x in range(a, b+1):
        if x % 2 == 0:
            print(x, end=' ')
