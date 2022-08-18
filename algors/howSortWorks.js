const numbers = [12,34,2,6,709,3,500, 500, 2]

let newArray = []
function mySort(a,b){
  // console.log(newArray)
  if(a<b){
    console.log(a,b, "-1")
    newArray.push(-1)
    return -1
  }
  if(a>b) {
    console.log(a,b, "1")
    newArray.push(1)
    return 1
  }
  console.log(a,b, "0")
  newArray.push(0)
  return 0
}

numbers.sort(mySort)
console.log(numbers)