const prompt = require('prompt-sync')()
// merge array using extra space 
let arr =[23, 45, 67, 78, 70]
let arr2 = [34, 56, 67]
let arr3 = []
for (let i = 0; i < arr.length; i++)
{
  arr3[i] = arr[i]
}
for (let j =0; j< arr2.length; j++)
{
arr3[arr3.length] = arr2[j]
}
console.log(arr3);

// inbuilt function to merge array

let newArray = [...arr, ...arr2]
console.log(newArray);

// Reverse an Array

newArray.reverse()
console.log(newArray);
