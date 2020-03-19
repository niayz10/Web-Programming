def lone_sum(a, b, c):
  """
  Given 3 int values, a b c, return their sum. However, if one of the values
  is the same as another of the values, it does not count towards the sum.
  """
  sum = 0
  sum += a if a not in [b,c] else 0
  sum += b if b not in [a,c] else 0
  sum += c if c not in [a,b] else 0
  return sum