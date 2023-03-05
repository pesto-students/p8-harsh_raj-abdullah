// using two pointer approach
function threeSumClosest(nums, target ){
  nums.sort((a,b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  
  for(let i = 0; i < nums.length - 2; i++){
    let j = i + 1;
    let k = nums.length - 1;
    while( j < k ){
      const currSum = nums[i] + nums[j] + nums[k];
      if(Math.abs(currSum - target) <  Math.abs(result - target)){
        result = currSum;
      }
      if(currSum == target) return currSum;
      else if(currSum > target) k--;
      else j++;
    }
  return result;
  }
}

console.log(threeSumClosest([-1, 2, 1], 1))