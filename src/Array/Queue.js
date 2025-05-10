const prompt = require('prompt-sync')()

// Queue is like [10, 20, 30] which based on principle FIFO like in real world people queue works whosoever comes first has to go first(FIRST IN FIRST OUT) so 10 entered first 10 will be the first which leave first


// enqueue = entering the element
// dequeue = removing the element
let arr = []
let currentSize = arr.length
let maxSize = 5;

function enqueue(newValue){
  if (currentSize >= maxSize){
    console.log("Queue is already full");
    return console.log(arr);
  }else {
    arr[currentSize] = newValue
    currentSize++
    return console.log(arr);
  }

}
function dequeue(){
  // has to delete the first element in the queue
// right element to left at the end removing the last element hence we require the desire output
  if (currentSize > 0){
    for (let i =0; i<arr.length; i++){
      arr [i] = arr[i+1]

    }
    currentSize--
    arr.length = currentSize

  }else {
    console.log('Queue is already empty ');
    
  }
  
  return console.log(arr);

}


enqueue(70); 
enqueue(30);
enqueue(40);
enqueue(50);
enqueue(60);
enqueue(10); // cannot enqueue further
dequeue() // removes first element 70

