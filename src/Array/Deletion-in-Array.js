const prompt = require('prompt-sync')()

let arr = [34, 50, 46, 76, 89, 100, 340]

let position =3;
// we can take position dynamically from user.
console.log(arr);

// For deletion in the array we have to move the element to the index which we have to delete. that is left move.. so that last value should be empty or undefined 

for (let i = position; i <arr.length - 1; i++ )
{
  arr [i] = arr[i+1]
}
arr.length = arr.length - 1
console.log(arr);