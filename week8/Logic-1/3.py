def squirrel_play(temp, is_summer):
    if is_summer:
        if temp >= 60 and temp <= 100:
            print("True")
    else:
        if temp >= 60 and temp <= 90:
            print("True")
        else:
            print("False")


squirrel_play(70, False)  # → True
squirrel_play(95, False)  # → False
squirrel_play(95, True)  # → True