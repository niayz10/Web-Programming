import math
d = 2
x = int(input())
for i in range(2, int(math.sqrt(x))+1):
    if x % i == 0:
        d += 2
    if i*i == x:
        d -= 1
print(d)