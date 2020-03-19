def in1to10(n, outside_mode):
    if outside_mode:
        if n <= 1 or n >= 10:
            print("True")
        else:
            print("False")
    else:
        if n >= 1 and n <= 10:
            print("True")
        else:
            print("False")


in1to10(5, False)  # → True
in1to10(11, False)  # → False
in1to10(11, True)  # → True