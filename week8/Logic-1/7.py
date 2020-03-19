def love6(a, b):
    sum = a + b
    diff = abs(a - b)

    if a == 6 or b == 6 or sum == 6 or diff == 6:
        print("True")
    else:
        print("False")


love6(6, 4)  # → True
love6(4, 5)  # → False
love6(1, 5)  # → True