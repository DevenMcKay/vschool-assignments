// 1 Rest Operator
let arr
function collectAnimals(...animals) {
  arr = [...animals]
}
collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]
console.log(arr)

// 2 Write a function that returns a food object with the array names as properties
function combineFruit(fruit, sweets, vegetables) {
  return { fruit, sweets: [...sweets], vegetables: [...vegetables] }
}
console.log(combineFruit(["apple", "pear"],
  ["cake", "pie"],
  ["carrot"]))
// //=> {
//       fruit: ["apple", "pear"],
//       sweets: ["cake", "pie"],
//       vegetables: ["carrot"]
//    }

// 3  Destructuring 

function parseSentence({ location, duration }) {
  return `We're going to have a good time in ${location} for ${duration}`
}
console.log(
  parseSentence({
    location: "Burly Idaho",
    duration: "2 weeks"
  }))

// 4 Destructuring 

function returnFirst2(items) {
  const [firstItem, ...rest] = items; /*change this line to be es6*/
  return firstItem
}
console.log(
  returnFirst2(["apple", "pear",
    "cake", "pie",
    "carrot"]))

// 4 Destructuring 

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites([firstFav, secondFav, thirdFav, ...arr]) {
  return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}
console.log(
  returnFavorites2(favoriteActivities))

function returnFavorites2(arr) {
  const [firstFav, secondFav, thirdFav] = arr
  return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}
console.log(
  returnFavorites2(favoriteActivities))

// 5 Rest & Spread 

function combineAnimals(a, b, c) {
  return [...a, ...b, ...c]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(
  combineAnimals([...realAnimals], [...magicalAnimals], [...mysteriousAnimals]));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// 6 More ES6xy
// function product(a, b, c, d, e) {
//   var numbers = [a,b,c,d,e];

//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }
product = (a, b, c, d, e) => [a, b, c, d, e].reduce((acc, number) => {
  return acc * number;
}, 1)

console.log(
  product(1, 2, 3, 4, 5)
)

// 7 More ES6xy

// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

unshift = (array, a, b, c, d, e) => [a, b, c, d, e, ...array];

let array = ["wow", "yes"]
console.log(
  unshift(array, 1, 23, "no", false, 1)
)

// 8 ES6sy

// function populatePeople(names){
//   return names.map(function(name){
//       name = name.split(" ");
//       // your code
//       return {
//           firstName: firstName,
//           lastName: lastName
//       }
//   })
// }

// Answer via indexing 
// populatePeople = (names) =>
//     names.map((name) => {
//     name = name.split(" ");
//     return {firstName: name[0], lastName: name[1]} 
// })

populatePeople = (names) =>
  names.map((name) => {
    const [firstName, lastName] = name.split(" ")
    return { firstName: firstName, lastName: lastName }
  })

console.log(
  populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
)
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]