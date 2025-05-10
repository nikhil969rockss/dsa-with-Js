let arr = []
let currentSize = arr.length
let max = 5;

function push(value){
  if (currentSize <= max ){
    arr[currentSize] = value
    currentSize++
  }
  else if(currentSize>max) {
    console.log("Stack is already full");
  }

}


push(34)
push(44)
push(76)
push(23)
push(54)
push(4)
push(2)
pop()
console.log(arr);

function pop(){
  if(currentSize>0){
    currentSize-= 1
    arr.length = currentSize
  }else if(currentSize==0) {
    console.log("stack is already empty");
  }
}

// 