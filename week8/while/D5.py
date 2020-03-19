n=int(input())
a=[int(i) for i in input().split()]
k=0
for i in range(1, len(a)):
    if a[i]>a[i-1]:
        k+=1
print(k)