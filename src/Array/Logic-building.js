const prompt = require("prompt-sync")();

// Logic building
// Break down the problem in to smaller parts
// Find a General solution to make the logic work
// Re-Analysis the solution
// Re-write the code

// Example: Find Even values from array, Double the every even elements and find the length manually

// Break down the parts
// first find the Even values from the array

let arr = [11, 12, 23, 34, 45, 54, 4, 6, 10, 33];
console.log(arr);
let evenArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
//     evenArr.push(arr[i]);
//   }
// }

// Now doubling the array

// for (let i = 0; i < evenArr.length; i++) {
//   evenArr[i] = evenArr[i] * 2;
// }

// Now count the array
//let count = 0
// for (let i = 0; i < evenArr.length; i++){
//   count++
// }

// console.log(evenArr, count);

// Making it optimize by removing 2 other additional loop
// we can use count variable inside the first loop
// while pushing into the array we can double it there, and get rid of another loop

// OPTIMIZE APPROACH
let count = 0
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    evenArr.push(arr[i]*2);
    count++
  }
}
console.log(evenArr, count);
