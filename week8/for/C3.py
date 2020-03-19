import math

a = int(input())
b = int(input())
if a <= b:
    for x in range(a, b + 1):
        st = int(math.sqrt(x))
        if st * st == x:
            print(x)
