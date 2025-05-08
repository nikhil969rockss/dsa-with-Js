const prompt = require('prompt-sync')();
let arr =[30, 14, 50, 60, 89, 5]
let newEl = +prompt("Enter new value to insert ")
console.log(arr);
if(isNaN(newEl)|| newEl < 0 ){
  console.log("Invalid input, please try again");
}
let position = +prompt("Enter position between 0-5 ")
if(isNaN(position) || position < 0 ||position >5){
  console.log("position should be value and between 0 - 5 ");
}

// have to shift the other right elements to forward to make space at index e

for(let i = arr.length -1; i >= 0; i--){
  if (i>= position){
    arr[i+1] = arr[i]
  }
  if(i === position){
    arr[i] = newEl
  }
}
console.log(arr);

arr.splice(2, 50, 1000)

