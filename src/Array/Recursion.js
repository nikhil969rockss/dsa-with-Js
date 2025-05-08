const prompt = require("prompt-sync")();

// Recursion: calling function again and again inside the function until it reaches the desire output i.e conditional statement

// it acts as a loop
// factorial of a number

function fact (num){
  if (num === 0){
    return 1
  }
  return num* fact(num-1)

}
let data = +prompt("Enter a value for factorial ")
if(isNaN(data) || data<0  ){
  return console.log('Invalid input please try again');
}
console.log("factorial of "+data+ "= "+fact(data));
