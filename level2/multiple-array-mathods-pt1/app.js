// Array
var peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82
  }
]
console.log(myFun(peopleArray))

// Function Filter Sort Map
function myFun() {
  // 1. Returns a list of everyone older than 18
  let eighteen = peopleArray.filter(function (person) {
    if (person.age > 18) {
      return person
    }
  })
  let alpha = eighteen.sort(function (a, b) {
    // 2. sorts alphabetically by providing alpha values to compare 
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  })
  // 3. Each name and age is embedded in a string that looks like an HTML <li> element.
  let newArray = alpha.map(function (person) {
    return `<li>${person.firstName} ${person.lastName} is ${person.age}</li>`
  })
  return newArray
}

// Extra Credit: Adds more people 
peopleArray.push(
  {
    firstName: "Jon",
    lastName: "Way",
    age: 20
  },
  {
    firstName: "Drake",
    lastName: "Yuk",
    age: 45
  },
  {
    firstName: "Dave",
    lastName: "Jones",
    age: 67
  }
)

// Creates New Array / Function filters by last name letter
let newArray = []
function myFun2() {
  return peopleArray.filter(function (person) {
    if (person.lastName.charAt(person.lastName.length - 1) === 'y' || person.lastName.charAt(person.lastName.length - 1) === 'z') {
      newArray.push(person)
    }
  })
}
myFun2(peopleArray)
// Test
// console.log(newArray)

// Function Deletes 2nd name & Reverses order 
function deleteReverse(arr) {
  arr.splice(1, 1)
  return arr.reverse()
}
// Test
console.log(deleteReverse(newArray))