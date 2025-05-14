const prompt = require("prompt-sync")();

// Second Largest Number
// Given an array arr of size N, print second largest distinct element from an array

// Input: [12, 35, 1, 10, 34, 1]===> Output: 34

// Input: [10, 5, 10]====> Output 5

let arr = [10, 5, 10];

// const secondLargest = function(arr){
//   let distinctElements = Array.from(new Set(arr))
//   distinctElements.sort((a,b)=> b-a)
//   if(distinctElements.length >=2) return distinctElements[1]
//   else return distinctElements

// }
// console.log(secondLargest(arr));

// optimize approach

const secondLargest = function (arr) {
  let firstMax = Number.NEGATIVE_INFINITY;
  let secondMax = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      secondMax = firstMax;
      firstMax = arr[i];
    } else if (arr[i] !== firstMax && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
};
console.log(secondLargest(arr));
