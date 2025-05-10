const prompt = require("prompt-sync")();
// Reverse an array by using Stack method: PUSH and POP simultaneously to obtain the reverse string.. Also first convert the string into array
let arr = [];
let currentSize = arr.length;
function push(item) {
  arr[currentSize] = item;
  currentSize++;
}
function pop() {
  let lastElement = arr[currentSize - 1];
  currentSize -= 1;
  arr.length = currentSize;
  return lastElement;
}

function reverseStr(strArray) {
  // inserting the string array into the stack
  for (let i = 0; i < strArray.length; i++) {
    push(strArray[i]);
  }
  for (let i = 0; i < strArray.length; i++) {
    str[i] = pop();
  }
}

let str = prompt("Enter any string to reverse it ");
if(!isNaN(parseInt(str)) ){
 return console.log('only strings allowed');
  }
str = str.split("");
reverseStr(str);
console.log(str.join(""));
