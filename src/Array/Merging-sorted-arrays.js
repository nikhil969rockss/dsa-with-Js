const prompt = require("prompt-sync")();
// This sorting only works in sorted Array
let arr1 = [1, 3, 5, 7, 10, 14];
let arr2 = [2, 4, 6, 8, 12, 15, 20];

let arr3 = [];
let i = 0,
  j = 0,
  k = 0;

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    arr3[k] = arr1[i];
    i++;
  } else {
    arr3[k] = arr2[j];
    j++
  }
  k++;
}
// checking if first array is exhausted or not
while (i < arr1.length) {
  arr3[k++] = arr1[i++];
}
while (j < arr2.length) {
  arr3[k++] = arr2[j++];
}

console.log(arr3);
