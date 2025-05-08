const prompt = require('prompt-sync')()


let arr =[23, 56, 45, 67, 89, 12, 34]
let find = 89
let elementIndex = undefined
// Linear Search.. Simplest. Loop all through the array until we find the element

for (let i =0; i < arr.length; i++){
  if(arr[i]===find){
    elementIndex = i
    break;
  }
}
console.log(`Your number ${find} is in ${elementIndex} index`);

// JS inBuilt methods

console.log(arr.indexOf(89));

// Deletion JS inBuilt method
arr.splice(2, 1)
console.log(arr);