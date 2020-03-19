def centered_average(nums):
  """
  Return the "centered" average of an array of ints, which we'll say is the
  mean average of the values, except not counting the largest and smallest
  values in the array. Use int division to produce the final average. You may
  assume that the array is length 3 or more.
  """
  nums.sort()
  return sum(nums[1:-1]) / (len(nums) - 2)
