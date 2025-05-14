const prompt = require("prompt-sync")();
// Two sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target

//Input: nums = [2, 7, 11, 5], target = 9
//Output: [0, 1] (Because nums[0] + nums[1] == 9, se return [0, 1])

//Input nums = [3, 2, 4], target = 6
// Output = [1, 2]

// Brute force

let nums = [2, 7, 11, 5];
let target = 9;

// const twoSum = function(nums, target){
//   for (let i =0; i < nums.length; i++){
//     for (let j = i + 1; j < nums.length; j++){
//       if (nums[i] + nums[j] === target)
//         return [i,j]
//     }
//   }

// }
// console.log(twoSum(nums, target));

 
// optimize solution

const twoSum = function(nums, target){
  let obj ={}
  for (i=0; i< nums.length; i++){
    let n = nums[i]
    if (obj[target - n] >=0){
      return [obj[target-n],i]
    }else{
      obj[n] = i
    }
  }

}

  

console.log(twoSum(nums,target));
