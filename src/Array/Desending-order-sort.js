const prompt = require("prompt-sync")();

// This is descending order of selection sort. it is same like selection sort can be done in two ways..

// method-1: where outer loop starts with length-1 till >=0 j-- and inner loop starts with i - 1 till >=0

let arr = [1, 23, 32, 21, 45, 54, 64, 43, 76, 89, 33];
console.log(arr);

function descendingSort(data) {
  let maxID;
  for (let i = data.length - 1; i >= 0; i--) {
    maxID = i;
    for (let j = i - 1; j >= 0; j--) {
      if (data[j] < data[maxID]) {
        maxID = j;
      }
      let temp = data[maxID];
      data[maxID] = data[i];
      data[i] = temp;
    }
  }
}

// descendingSort(arr)
// console.log('Here is your sorted array in descending 👇');
// console.log(arr);

// method-2: In this method only the inner condition is changed if ( data[j] > data[maxID])

function selectionSortDescM2(data) {
  let maxID;
  for (let i = 0; i < data.length; i++) {
    maxID = i

    for (let j = i + 1; j < data.length; j++) {
      if (data[j] > data[maxID]) {
        maxID = j
      }
    }
    let temp = data[maxID]
    data[maxID] = data[i]
    data[i] = temp
  }
}
selectionSortDescM2(arr);
console.log("Your sorted array in descending order 👇");
console.log(arr);
