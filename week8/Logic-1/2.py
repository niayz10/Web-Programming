def date_fashion(you, date):
    if you <= 2 or date <= 2:
        print("0")
    elif you >= 8 or date >= 8:
        print("2")
    else:
        print("1")


date_fashion(5, 10)  # → 2
date_fashion(5, 2)  # → 0
date_fashion(5, 5)  # → 1