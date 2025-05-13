const prompt = require('prompt-sync')()
// In insertion sort: you have to insert the data, like how, There will be 2 loops, outer one which goes right hand side in the array and the inner loop which compares the current value and change in the previous one if it is larger. 

let arr = [12,23,11,22,34,43,33,44,45,56,54,55]
console.log(arr);

function insertionSort(data){
  let i, current ,j
  for(i =1; i < data.length; i++){
    current = data[i]
    j = i - 1;
    while(j >= 0 && data[j] > current){
      data[j+1] = data[j]
      j--
    } 
    data[j+1] = current
  }

}
insertionSort(arr)
console.log('Your sorted array with insertion sort 👇');
console.log(arr);