import math

a = int(input())
b = int(input())
if 0 < a <= 1000 and 0 < b <= 1000:
    c = a ** 2 + b ** 2
    print(math.sqrt(c))
