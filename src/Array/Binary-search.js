const prompt = require("prompt-sync")();

// Binary Search always work in sorted array, If you want to use binary search, first sort the array then use

let arr = [3, 6, 24, 67, 78, 100];
let start = 0;
let end = arr.length - 1;
let find = 3;
let position;
console.log(arr);
let count = 0;
while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === find) {
    position = mid;

    break;
  } else if (arr[mid] < find) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
if (position === undefined) {
  return console.log("Cannot find " + find);
} else {
 
  console.log("Your element " + find + " is in " + position + " position");
}

