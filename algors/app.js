// 1.Object/Array Mix
const numbers = [0,"one", "2"]

// const { METHODS } = require("http")

// const obj = Object.assign({},numbers)
// const obj = {...numbers}
// console.log(obj)

// // Returns array pairs, values, and keys
// const obj2 = [`zero`,1,"two",[3]]
// const arr = Object.entries(obj2)
// const arr = Object.values(obj2)
// const arr = Object.keys(obj2)
// console.log(arr)

// Objects keys, values, and entries 
// const animal = {
//   first: 'The',
//   last: 'Lion'
// }
//   const propertyNames=Object.keys(animal);
//   console.log(propertyNames);

// // 2. loop thru array 
// function loopThroughArr(number){
//   for(var i = 0; i < number.length; i++){
//        if(number[i] % 2 === 0){
//       console.log(number[i] +" even")
//       }else {
//       console.log(number[i] +" odd")
//   }
// // console.log('✅', arguments.length)
// }
// }

// 3. Array Assign 
// loopThroughArr([5,3,4])
// let arr = [1,3,9]
// arr[arr.length-1] = 10
// arr.length = 5
// arr.splice(3,2,"4","red")
// console.log(arr)

// 4. Object spread and add
// const datafromForm = {
//   email: "blueman@gmail.com",
//   password: "tobias123",
//   username: "funke"
// }
// const newUser = {
// ...datafromForm, 
// id: 2345, 
// isAdmin: false
// }
// console.log(newUser)

// 5.Object collection
// const blue = "1"
// const green = "green"
// const red = "red"
// const colors = { red, green, blue }
// console. log(colors.blue)

// 6.Array destruction
// const vegetables = ["carrit", "tomat", "tomato soup"];
// const [firstVegetable] = vegetables
// console.log(firstVegetable)

// 7.Object destruction
// const people = [
// {name: 'Bob', age: 31},
// {name: 'Joe', age: 29},
// {name: 'Ben', age: 42}
// ]
// const [{},{},{age:rat}] = people
// console.log(rat)

// 8.Array sort
// const largest = [3, 5, 2, 8, 1]
// console.log(
// largest.sort((a, b) =>a-b))
// //Array reordered
// console.log (largest[0])

// 9.Divisible By
// function isDivisible(a,b) {
//   let c = (a/b)
//   if (a===0||b===0) {
//   return ("invalid" + " Answer:" + c)}
//   else if (a % b === 0) {
//     return(true + " Answer:" + c)
//   }
//   else {
//   return(false +" Answer: " + c)}}

//   console. log(
//   isDivisible(-0, 2))

// 10.Letter Swap
// let name = "steve"
// let splitName = name.split("")
// splitName[1] = "l"
// let joinName = splitName.join()
// console.log(joinName)

// 11.Filter Array Method 
// var cars = [
// {make:"Ford", model: "E150",price: 10000},
// {make: "Chevy", model: "Camaro", price: 200107},
// {make: "Toyota", model: "Tacoma",  price: 30900},
// {make: "Ford", model: "Explorer", price: 9000},
// {make: "Ford", model: "F250", price: 2400}
// ]
// var fords = cars.filter(car => car.make ==="Ford")
// console.log(fords)

// 12.Reduce METHODS
// var numbers = [13, 6, 2]
// var total = numbers.reduce ((previous, number) => {
// return previous + number;
// }, 0)
// console.log(total)
//Reduce with starting #
// var numbers = [13, 6, 2]
// var total = numbers.reduce ((prev, next) => {
//   console.log(prev)
// return prev + next;
// }, 50)
// console.log(total)
//total = 71

// 13. Tally using reduce
// var desks =[
// {type:"sitting"}, 
// {type:"sitting"}, 
// {type:"sitting"}, 
// {type:"standing"}, 
// {type:"standing"}, ]

// var deskTypes = desks.reduce((previous, desk) =>{
// if (desk.type==="sitting") previous.sitting++;
// if (desk.type==="standing") previous.standing++;
// return previous;
// },
// { sitting: 0, standing: 0 });
// console.log(deskTypes)

// 14. Unique Data
// let arr = ["1","3","4","4","6","1"];

// const result = arr.reduce(
//   (prev, item) =>

//     prev.find((foundItem) => foundItem === item) ?prev : [...prev, item],
//   []
// );

// console.log(result);

// 15. FizzBuzz
// let numStr = () => {
//   let fizzBuzz = ""
//   for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5===0) {
//       fizzBuzz += "FizzBuzz"
//     } else if (i % 3 === 0) {
//       fizzBuzz += "Fizz"
//     } else if (i % 5 === 0) { 
//       fizzBuzz += "Buzz" }
//     else
//       fizzBuzz += i
//   }
//   console.log(fizzBuzz)
// }
// numStr()
// 15. Each Line FizzBuzz 
// let numStr = () => {
//   let fizzBuzz = ""
//   for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5===0) {
//       console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//       console.log("Fizz")
//     } else if (i % 5 === 0) {
//       console.log("Buzz")
//     }
//     else
//       console.log(i)
//   }
// }
// numStr()

// 15. Array FizzBuzz
// let fizzBuzz = []
// let numStr = () => {
//   for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5===0) {
//       fizzBuzz.push("FizzBuzz")
//     } else if (i % 3 === 0) {
//       fizzBuzz.push("Fizz")
//     } else if (i % 5 === 0) {
//       fizzBuzz.push("Buzz")
//     }
//     else
//       fizzBuzz.push(i)
//   }
//   console.log(fizzBuzz)
// }
// numStr()

// 16.Simple Loop to array
// var numbersArr = [23, 64, 20,33,40, 100, 30,50, 2]
// let newArr = []
// for (i = 0; i < numbersArr.length; i++) {
//   if (numbersArr[i] % 2 !== 0) {
//     newArr.push(numbersArr[i])
//   }
// }
// console. log (newArr)

// 17.Add to array of object
// var users = [
//   {
//     name: "Sophie",
//     age: 12
//   },
//   {
//     name: "Larry",
//     age: 32
//   },
//   {
//     name: "Cathy",
//     age:
//       40
//   }]
//   // const isAdmin = users.map(item=>({...item,isAdmin:true}))
//  users.forEach(item=>(item.isAdmin=true))
//   console.log(users)

// // 18. Building nested arrays
// let zeros = []
// for (i = 0; i < 3; i++) {
//   zeros[i] = []
//   for (j = 0; j < 3; j++) {
//     zeros[i][j] = 0;
//   }}
//   console.log(zeros)

// // 19.setTimout 
// console.log(1)
// setTimeout(()=>console.log(2), 0)
// console.log(3)
// console.log(2+5+10)

// 20. JSON
// const obj = {first: "1", "two": 2, "three": true}
// console.log(JSON.stringify(obj))

// 21.Error 

// if(2===2){
//   throw new Error("Hey I'm an error")
// }

// try {
//   if(2===2){
//     throw "Hey I'm an error"

//   }
// }
// catch(err){
//   console.log("Error")
// }
// finally {
//   console.log("I always run")
// }

// 21.sort
// let eighteen = [
//   { lastName: "ill", firstname: "tom" },
//   { lastName: "bill", firstname: "tom" },
//   { lastName: "will", firstname: "tom" }
// ]

// let alpha = eighteen.sort(function (a, b) {
//   // sorts alphabetically by providing alpha values to compare
//   if (a.lastName < b.lastName) {
//     return -1
//   }
//   if (a.lastName > b.LastName) {
//     return 1
//   }
//   return 0
// })
// console.log(alpha)

// 22.update objects

// const backpack = {
//   name: "Everyday Backpack",
//   volume: 30,
//   color: "grey",
//   pocketNum: 15,
//   strapLength: {
//     left: 26,
//     right: 26,
//   },
//   changeName(newName){
//     this.name = newName
//   },
//   changeVol(newVol){
//     this.volume = parseInt(newVol)
//   },
//   changeColor(newColor){
//     this.color= newColor
//   },
//   changePocketNum(newPocketNum){
//     this.pocketNum = newPocketNum
//   },
//   toggleLid: function (lidStatus) {
//     this.lidOpen = lidStatus;
//   },
//   newStrapLength: function (lengthLeft, lengthRight) {
//     this.strapLength.left = lengthLeft;
//     this.strapLength.right = lengthRight;
//   },
// };

// backpack.changeColor("red")
// backpack.changeName("Blackpack")

//Bonus Cap after space in paragraph
// function capitalize(words) {
//   let eachWord = words.split(" ")
//   str=""
//   let caps = []
//   const newArr = eachWord.map(item=>{
//     return item[0].toUpperCase() + item.substr(1)  
//   })
//   return newArr.join(" ")
//   }
//   console.log(capitalize("hey friends! practice practice practice!"))