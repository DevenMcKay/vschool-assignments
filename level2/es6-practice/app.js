// 1 LET and CONST
const name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// 2 Rewrite Arrow
const carrots = ["bright orange", "ripe", "rotten"]

mapVegetables = arr => arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
console.log(mapVegetables(carrots))

// 3 Rewrite Filter using arrows
const people = [
  {
      name: "Princess Peach",
      friendly: false
  },
  {
      name: "Luigi",
      friendly: true
  },
  {
      name: "Mario",
      friendly: true
  },
  {
      name: "Bowser",
      friendly: false
  }
]

filterForFriendly = arr => arr.filter(person => person.friendly)
console.log(filterForFriendly(people))

// 4 Rewrite Arrows
function doMathSum(a, b) {
    return a + b
}
var produceProduct = function(a, b) {
    return a * b
}

doMathSum = (a, b) => a + b
var produceProduct = (a, b) => a * b

// Print string function
// Hi Kat Stark, how does it feel to be 40?

const obj = {firstName:"Kat",lastName:"Stark", age:40}

function printString(firstName="Jane", lastName="Doe", age=100) {
  // template literal
  return `Hi ${obj.firstName} ${obj.lastName}, how does it feel to be ${obj.age}? ` 
  // String concat
  + "Hi" + " " + obj.firstName + " " + obj.lastName + ", how does it feel to be " + obj.age + "?"
}
console.log(printString(obj))

// 5 One line arrow
const animals = [
  {
      type: "dog",
      name: "theodore"
  },
  {
      type: "cat",
      name: "whiskers"
  },
  {
      type: "pig",
      name: "piglette"
  },
  {
      type: "dog",
      name: "sparky"
  }
];

function filterForDogs(arr) {
   return arr.filter(animal => {
       if (animal.type === "dog") {
           return true
       } else {
           return false
       }
   })
}
filterForDogs = arr => arr.filter(animal => animal.type === "dog")

console.log(filterForDogs(animals))

// 6 Template Literals
// Hi Janice!
// Welcome to Hawaii.
// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.

const hi = {location: "Hawaii" , name: "Janice"}

welcome = (location, name) => 
`Hi ${hi.name}

Welcome to ${hi.location}
  
I hope you enjoy your stay. Please ask the president of ${hi.location} if you need anything.`

console.log(welcome(hi))