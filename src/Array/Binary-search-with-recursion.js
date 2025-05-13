const prompt = require('prompt-sync')()
// Binary search with recursion is same like normal binary, The only difference is you have to pass parameter in function 

let arr = [12, 23, 34, 45, 56, 67, 78, 89, 90]
console.log(arr);
let start = 0;
let end = arr.length -1;
let position;
let find = 90;
function recursionBS(item,sPoint, ePoint){
  let mid = Math.floor((sPoint+ePoint)/2)
  if (item[mid] === find){
    position = mid
    return true
  }else if (item[mid] < find){
    recursionBS(item, mid+1, item.length-1)
  } else {
    recursionBS(item,0, mid-1 )
  }


}
recursionBS(arr, start, end)
console.log('Your value '+find+" is in position "+position);
