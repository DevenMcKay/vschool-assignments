const readline = require("readline-sync")
const num1 = readline.question("Please enter your first number ");
const num2 = readline.question("Please enter your second number ");
const operation = readline.question("Please enter the operation to perform: add, sub, mul, div: ");
// Result uses Temlate Literals to print/calculate 
if (operation === "add") {
  console.log(`The result is: ${parseInt(num1) + parseInt(num2)}`)
} else if (operation === "sub") {
  console.log(`The result is: ${parseInt(num1) - parseInt(num2)}`)
} else if (operation === "mul") {
  console.log(`The result is: ${parseInt(num1) * parseInt(num2)}`)
} else if (operation === "div") {
  console.log(`The result is: ${parseInt(num1) / parseInt(num2)}`)
} else {
  console.log("The result is: INVALID")
}


