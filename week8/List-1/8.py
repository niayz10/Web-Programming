def max_end3(nums):
  """
  Given an array of ints length 3, figure out which is larger between the
  first and last elements in the array, and set all the other elements to be
  that value. Return the changed array.
  """
  return [nums[0]]*3 if nums[0] >= nums[-1] else [nums[-1]]*3