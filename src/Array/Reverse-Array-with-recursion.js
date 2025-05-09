let arr =[ 3, 5, 10, 54, 80]

function reverseArray(data, start, end){
  console.log(arr);
  if(start<= end){
    let temp = data[start]
    data[start] = data[end]
    data[end] = temp

    reverseArray(arr,start+1,end-1 )

  }

}
reverseArray(arr,0,arr.length-1  )
