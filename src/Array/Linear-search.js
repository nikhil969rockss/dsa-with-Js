const prompt = require('prompt-sync')()


let arr = [30, 40, 13, 48, 67, 91, 33]
console.log(arr);
let find = +prompt("Enter a value to find it's position ")
let position;
if(isNaN(find)){
  return console.log('Invalid input, try again');
}

for(let i =0; i< arr.length;i++){
  if(arr[i] === find){
    position = i
    break;
  }
}
if (!position){ return console.log('cannot find '+ find +" value");}
else{
  console.log('Your value = '+find +" it's position = "+position);
}


