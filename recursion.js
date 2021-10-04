function recursiveSum(...nums){
  debugger;
  if (!nums.length) return 0;
  const current = nums.pop()
  debugger
  return current + recursiveSum(...nums)
}

recursiveSum(1,2,3,4,5)
