def sorta_sum(a, b):
    sum = a + b
    if sum >= 10 and sum <= 19:
        print("20")
    else:
        print(sum)


sorta_sum(3, 4)  # → 7
sorta_sum(9, 4)  # → 20
sorta_sum(10, 11)  # → 21