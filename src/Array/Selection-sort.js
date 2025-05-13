const prompt = require("prompt-sync")();
// In selection sort we assume the first element to be minimum and compare it with others element if another element found to be minimum than the assuming one, then new minimum is selected, and then it is replaced it that

let arr = [98, 56, 78, 34, 45, 32, 12, 1];
console.log(arr);

function selectionSort(data){
  let minID;
  for (let i =0; i < data.length; i++){
    minID =i

    for (let j = i+1; j < data.length; j++){
      if (data[j] < data[minID]){
        minID =j
      }
    }
    let temp = data[minID]
    data[minID] = data[i]
    data[i] = temp
  }
}

selectionSort(arr)
console.log('Your sorted array 👇 by selection sort');
console.log(arr);