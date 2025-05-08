const prompt = require("prompt-sync")();

let arr = [23, 12, 56, 45, 67, 78, 21];
// Using bubble sort for sorting the array
// In Have to use 2 loops for sorting in this
// that means number of elements X number of elements = number of operation
// [3, 5, 1, 4] = 4X4 = 16 operations

for (let i = 0; i < arr.length; i++) {
 
  for(let j =0; j< arr.length; j++){
   
    if (arr[j] > arr[j+1] ){
      let temp = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = temp
    }
    
  }
}
console.log(arr);
