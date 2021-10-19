// Log 0 - 9

for (i = 0; i < 10; i++){
  console.log(i)
}



// Log 9 - 0
/*
for (i = 9; i >= 0; i--){
  console.log(i)
}
*/


// Print "fruit"
/*
const fruit = ["banana", "orange", "apple", "kiwi"]

for (i = 0; i < fruit.length; i++) {
  console.log(fruit[i])
}
*/


// Push 0 - 9
/*
numbers = []
for (i = 0; i <= 9; i++){
  numbers.push(i)
}
console.log(numbers)
*/


// Log Evens 0 - 100
/*
for (i = 0; i <= 100; i++){
  if (i % 2 === 0) {
    console.log(i)
  }
}
*/


// Every Other Log
/*
const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for(i = 0; i < fruit.length; i++){
  if (i % 2 === 0){
    console.log(fruit[i])
  }
}
*/


// peopleArray

// const peopleArray = [
//   {
//     name: "Harrison Ford",
//     occupation: "Actor"
//   },
//   {
//     name: "Justin Bieber",
//     occupation: "Singer"
//   },
//   {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//   },
//   {
//     name: "Oprah",
//     occupation: "Entertainer"
//   }
// ]


// Names of People Print 
/*
for (i = 0; i < peopleArray.length; i++){
  console.log(peopleArray[i].name)
}
*/


// Names & Occupation Array Push

// names = []
// occupation = []
// for (i = 0; i < peopleArray.length; i++){
// names.push(peopleArray[i].name)
// occupation.push(peopleArray[i].occupation)
// }
// console.log(names, occupation)


// Push Everyother

// names = []
// occupations = []
// for (i = 0; i < peopleArray.length; i++){
//   if (i % 2 === 0) {
//     names.push(peopleArray[i].name)
//   } else if (i % 2 !== 0) {
//     occupations.push(peopleArray[i].occupation)
//   }
// }
// console.log(names, occupations)

// Nested 0 Arrays

// let zeros = [];
// for (i = 0; i < 3; i++) {
//   zeros[i] = [];
//   for(j = 0; j < 3; j++) {
//     zeros[i][j] = 0;
//   }
// }
// console.log(zeros)

// Neseted 0..1..2.. array

// let zeros = [];
// for (i = 0; i < 3; i++) {
//   zeros[i] = [];
//   for(j = 0; j < 3; j++) {
//     zeros[i][j] = i;
//   }
// }
// console.log(zeros)


// Nested 012 Array

// let zeros = [];
// for (i = 0; i < 3; i++) {
//   zeros[i] = [];
//   for(j = 0; j < 3; j++) {
//     zeros[i][j] = j;
    
//   }
// }
// console.log(zeros)

// Numbers to "X" for array

// let zeros = [];
// for (i = 0; i < 3; i++) {
//   zeros[i] = [];
//   for(j = 0; j < 3; j++) {
//     zeros[i][j] = j;
//     for(k = 0; k < 3; k++) {
//       zeros[i][j] = "X";
//     }
//   }
// }
// console.log(zeros)