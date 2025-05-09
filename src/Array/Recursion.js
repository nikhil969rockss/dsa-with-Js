const prompt = require("prompt-sync")();

// Recursion: calling function again and again inside the function until it reaches the desire output i.e conditional statement

// it acts as a loop
// factorial of a number

// function fact (num){
//   if (num === 0){
//     return 1
//   }
//   return num* fact(num-1)

// }
// let data = +prompt("Enter a value for factorial ")
// if(isNaN(data) || data<0  ){
//   return console.log('Invalid input please try again');
// }
// console.log("factorial of "+data+ "= "+fact(data));


// Indirect Recursion
/**
 * function a (){
 * b()
 * }
 * 
 * function b(){
 * a()
 * }
 * a()
 * 
 * 
 */

// let money =100
// let totalApple =0
// function buyApple(money){
//   if (money > 0){
//     console.log("I have " + money + " rs and " + totalApple + " apple");
//     buyMore(money)
    
   
   

//   }else {
//     console.log("I don't have money now ", totalApple+ " total apple purchased");
//   }
  

// }
// function buyMore(money){
//   totalApple++
 
//   buyApple(money-10)

// }
// buyApple(money)




// interview question 

function test (x){
  console.log(x);
  if(x>0){
    x--
    test(x)
    
  }
  
}
let data = 5
test(data);