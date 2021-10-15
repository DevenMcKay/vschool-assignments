// Question 1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"]
numbComputers = 0
for (i = 0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer") {
    numbComputers++
  }
}
console.log("There are " + numbComputers + " computers in this array")

// Question 2

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male"
  }, {
    name: "Madeline",
    age: 80,
    gender: "female"
  }, {
    name: "Cheryl",
    age: 22,
    gender: "female"
  }, {
    name: "Sam",
    age: 30,
    gender: "male"
  }, {
    name: "Suzy",
    age: 4,
    gender: "female"
  }
]

for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {

  if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + " and is old enough to see Mad Max Fury Road, let HIM in.")
  } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + " and is old enough to see Mad Max Fury Road, let HER in.")
  } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + " and is not old enough to see Mad Max Fury Road, don't let HIM in.")
  } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
    console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is " + peopleWhoWantToSeeMadMaxFuryRoad[i].age + " and is not old enough to see Mad Max Fury Road, don't let HER in.")
  }
}

// let arrayOfArrays = [
// [2, 5, 435, 4, 3] // "The light is on"
// [1, 1, 1, 1, 3]   // "The light is on"
// [9, 3, 4, 2]      // "The light is off"
// ]

// for (i = 0; i < arrayOfArrays.length; i++) {
//   for (j = 0; j < arrayOfArrays[i].length; j++ ) {

//   }
// } 


// Bonus (UNComment each array)
let arrayOfArrays =
  // [2, 5, 435, 4, 3] // "The light is on"
[1, 1, 1, 1, 3]   // "The light is on"
// [9, 3, 4, 2]      // "The light is off"

let sum = 0
for (i = 0; i < arrayOfArrays.length; i++) {
  sum += arrayOfArrays[i]
}
console.log(sum)

if (sum % 2 === 0) {
  console.log("The light is off")
} else if (sum % 2 !== 0) {
  console.log("The light is on")
}