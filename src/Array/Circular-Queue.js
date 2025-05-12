const prompt = require("prompt-sync")();

// In this circular queue, Entries are entered from rear and deleted from front, initially both rear and front will -1 after entering a value front = rear =0; then, front will increase+1; until it reaches the max size, rear = 0 so that it adds again

// on dequeue method

class CircularQueue {
  constructor(size) {
    this.maxSize = size;
    this.arr = new Array(size);
    this.currentSize = 0;
    //this.arr.length = this.currentSize
    this.front = -1;
    this.rear = -1;
  }

  enqueue(newValue) {
    if (this.rear === this.maxSize - 1) {
      this.rear = 0;
    } else {
      this.rear++;
    }
    if (this.currentSize !== this.maxSize) {
      this.arr[this.rear] = newValue;
      this.currentSize++;

      if (this.front === -1) this.front = 0;
    }else {
      console.log('Queue is full can not add '+newValue);
    }
    return this.arr
  }
  dequeue() {
    if (this.currentSize !==0){
      this.arr[this.front] = null
      if (this.front === this.maxSize -1){
        this.front = 0
      }else{
        this.front++
      }
      this.currentSize--
      return this.arr
    }
    else{
      this.front =-1
      this.rear =-1
      console.log('Queue is empty');
      return this.arr
    }

  }
}

const circularQueue = new CircularQueue(5);

circularQueue.enqueue(10)
circularQueue.enqueue(20)
circularQueue.enqueue(30)
circularQueue.enqueue(40)
circularQueue.enqueue(50)
circularQueue.dequeue()
circularQueue.enqueue(60)
circularQueue.dequeue()
circularQueue.enqueue(100)
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.dequeue()
circularQueue.dequeue()

console.log(circularQueue);

