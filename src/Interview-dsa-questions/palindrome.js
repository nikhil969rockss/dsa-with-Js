const prompt = require('prompt-sync')()


// Question:1 Palindrome Number
// An integer is a Palindrome when it reads the same forward and backwards

// Input x =121 -------> Output: true
// Input x = 10--------> Output: false

const isPalindrome = function(num){
  return num < 0 ? false: num === +num.toString().split("").reverse().join("")

}
console.log(isPalindrome(123));