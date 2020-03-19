def alarm_clock(day, is_vacation):
    if is_vacation:
        if day == 0 or day == 6:
            print("\'10:00\'")
        else:
            print("\'10:00\'")
    else:
        if day == 0 or day == 6:
            print("\'10:00\'")
        else:
            print("\'7:00\'")


alarm_clock(1, False)  # → '7:00'
alarm_clock(5, False)  # → '7:00'
alarm_clock(0, False)  # → '10:00'