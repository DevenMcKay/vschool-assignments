var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// console.log("fruit: ", fruit);
// console.log("vegetables: ", vegetables);

// 1.Remove Last Vegetable 
vegetables.pop()

// 2. Remove First Fruit
fruit.shift()

// 3.Find Index of Orange
// console.log(fruit.indexOf("orange"))

// 4.Add Index to End of Fruit 
fruit.push(fruit.indexOf("orange"))
// console.log(fruit)

// 5.Length
// console.log(vegetables.length)

// 6.Add Veg Length to Veg
vegetables.push(vegetables.length)
// console.log(vegetables)

// 7.Concat Arrays
let foods = fruit.concat(vegetables)
// console.log(foods)

// 8.Splice
foods.splice(4, 2)
// console.log(foods)

// 9.Reverse
foods.reverse()
// console.log(foods)

// 10.String then back
let foodsToString = foods.toString()
// console.log(foodsToString)
let foods2 = foodsToString.split(",")
console.log(foods2)
