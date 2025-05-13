const prompt = require('prompt-sync')()
// Fibonacci Series -->0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233,...

//F(0) = 0, F(n) = 1
// F(n) = F(n-1) + F(n-2) for n > 1

// Input n = 3 -------> Output: 2

// Printing first n series of fibonacciNumber
let arr =[]
const fibonacciNumber = function(num){

  if (num === 0 || num < 0){
    arr = [0]
   
  }else if (num >= 1){
    arr = [0, 1]
   
  }
  for(let i = 2; i < num; i++){
    arr[i] = arr[i-1] + arr[i-2]
   
    }
  return arr

}
// Printing first n series of fibonacciNumber
//console.log(fibonacciNumber(4));



// Now returning the number inside the array 
// const fib = function(num){
//   let array = [0, 1]

//   for (let i = 2; i <= num; i++){
//     array.push(array[i - 1] + array[i -2])
//   }
//   return array[num]

// }
// console.log(fib(1));


// Another solution by Recursion

const fib  = function(num){
  if ( num <= 1) return num

  return fib (num -1) + fib(num - 2)

}
// f(3)===> f(2) + f(1) = 1 + 1
// f(2)==> f(0)+f(1) = 1
//          0 + 1
console.log(fib(3));