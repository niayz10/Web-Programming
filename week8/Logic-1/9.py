def near_ten(num):
    mod_num = num % 10
    if mod_num <= 2:
        print("True")
    else:
        print("False")


near_ten(12)  # → True
near_ten(17)  # → False
near_ten(19)  # → False