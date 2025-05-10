class Stack {
  newArray = [];
  currenSize = 0;
  maxSize ;
  lastElement =''
  strArray
  constructor(size) {
    this.maxSize = size;
    this.newArray.length = this.currenSize;
  }
  push(newValue) {
    if (this.currenSize >= this.maxSize) {
      console.log("Stack is full, cannot enter another value");
    } else {
      this.newArray[this.currenSize] = newValue;
      this.currenSize++;
    }
  }
  pop() {
    if (this.currenSize > 0) {
      this.lastElement = this.newArray[this.currenSize - 1]
      this.currenSize--;
      this.newArray.length = this.currenSize;
      return this.lastElement
    } else {
      console.log("Stack is already empty");
    }
  }
  display() {
    console.log(this.newArray);
  }
  reverseStr(str) {
     this.strArray = str.split("")
  
    
    for (let i = 0; i < this.strArray.length; i++) {
      this.push(this.strArray[i]);
    }

    for (let i = 0; i < this.strArray.length; i++) {
        this.strArray[i] = this.pop()
    }
    return console.log(this.strArray.join(""));
  }
 
}
const st1 = new Stack();
// st1.push(34);
// st1.push(44);
// st1.push(64);
// st1.push(94);
// st1.push(84);
// st1.push(14);
// st1.display();
// st1.pop();

let str = 'nikhil'
st1.reverseStr(str)


