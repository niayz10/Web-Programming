def big_diff(nums):
  """
  Given an array length 1 or more of ints, return the difference between the
  largest and smallest values in the array. Note: the built-in min(v1, v2) and
  max(v1, v2) functions return the smaller or larger of two values.
  """
  return max(nums) - min(nums)