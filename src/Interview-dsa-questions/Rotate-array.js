const prompt = require("prompt-sync")();

// Rotate Array by k.
// Given an integer array nums, rotate the array to teh right by k steps
// where k is non-negative

// Input: nums =[1, 2, 3, 4, 5, 6, 7] ,k = 3
// Output : [5, 6, 7, 1, 2, 3, 4]

// Input: nums = [-1, -100, 3, 99], k = 2
// Output: [3, 99, -1, -100]
let nums = [-1, -100, 3, 99];
let k = 2;
const rotate = function (nums, k) {
  let size = nums.length;
  if (k > size) k = k % size;
  for (let j = 0; j < k; j++) {
    let copy = nums[size - 1];
    for (let i = size - 1; i >= 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = copy;
  }
  return nums;
};
// console.log(rotate(nums, k));

// Time complexity : O(n**2)

// Method : 2 By using inbuilt array functions

// Input: nums =[1, 2, 3, 4, 5, 6, 7] ,k = 3
// Output : [5, 6, 7, 1, 2, 3, 4]


const rotateArray = function(nums,k){
  let size = nums.length
  if (k > size ) k = k % size
  let rotated = nums.splice(size - k, size)
  nums.unshift(...rotated)
  return nums
}
// console.log(rotateArray(nums, k));

// Time complexity: o(n)

// Method 3 : Optimize Approach

// Input: nums =[1, 2, 3, 4, 5, 6, 7] ,k = 3
// Output : [5, 6, 7, 1, 2, 3, 4]


//[1, 2, 3, 4, 5, 6, 7] ==> reverse the whole array ==> [7, 6, 5, 4, 3, 2, 1] reverse the array from k = n-1 ==>//3-1 = 2 [5, 6, 7, 4, 3, 2, 1] ===> reverse it again from k = n// 3 to length-1 ===> [5, 6, 7, 1, 2, 3, 4]

const optimizeRotate = function(nums,k){
  let size = nums.length
  if (k > size) k = k % size
  reverse(0,size-1)
  reverse(0,k - 1)
  reverse(k,size - 1)
return nums
}
function reverse (i,j){
  while (i < j){
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
    i++
    j--
  }

}
console.log(optimizeRotate(nums,k));