// 1.Cap & Lower
// function capilizeAndLowercase(word) {
//   return word.toUpperCase() + word.toLowerCase()
// }
// console.log(capilizeAndLowercase("HeLlo"))

// 2. Half That
// Math.floor() method rounds a number DOWNWARDS 
// function findMiddleIndex(word) {
//   return Math.floor(word.length / 2)
// }
// console.log(findMiddleIndex("HeLlo00000000"))

// 3. slice() First Half
// function returnFirstHalf(word) {
//   return word.slice(0,Math.floor(word.length / 2))
// }
// console.log(returnFirstHalf("Hafgfsssasxdav"))

// 4.First half Cap / Last half Low
// function capilizeAndLowercase(word){
//   return word.slice(0,Math.floor(word.length / 2)).toUpperCase() + word.slice(Math.floor(word.length)/2).toLowerCase();
// }
// console.log(capilizeAndLowercase("HelloGoodByeAndGooDNighT"));

// 5. Bonus Cap after space in paragraph
// function capitalize(words) {
// let eachWord = words.split(" ")
// str=""
// for (i = 0; i <words.length; i++) {
//   let caps = eachWord[i][0].toUpperCase()
//   let str = eachWord.replace(eachWord[i][0], caps[i][0])
//   console.log(str)
  
//   // console.log(eachWord.join(eachWord[i][0].toUpperCase()))
// }
// }
// console.log(capitalize("hey friends! practice practice practice!"))