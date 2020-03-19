def caught_speeding(speed, is_birthday):
    if is_birthday:
        if speed <= 65:
            print("0")
        elif speed >= 66 and speed <= 85:
            print("1")
        elif speed >= 86:
            print("2")
    else:
        if speed <= 60:
            print("0")
        elif speed >= 61 and speed <= 80:
            print("1")
        elif speed >= 81:
            print("2")