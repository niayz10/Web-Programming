def cigar_party(cigars, is_weekend):
    if is_weekend:
        print("True")
    else:
        if cigars >= 40 and cigars <= 60:
            print("True")
        else:
            print("False")


cigar_party(30, False)  # → False
cigar_party(50, False)  # → True
cigar_party(70, True)  # → True