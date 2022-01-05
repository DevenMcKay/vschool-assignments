// RUN: node index.js
var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

// SPLITS INPUT TO ARRAY
const inputSplit = input.split("")

// ASSIGNS ASCII CODES FOR INPUTS
const inputToAscii = inputSplit.map((item) => (
  item.charCodeAt(0)
))

// CHECKS ASCII CODES APPLIES SHIFT
// IF VALUE PASSED "Z" ALPHABET RESETS, ALL OTHER CHARS REMAIN SAME
const shiftAscii = inputToAscii.map((item) => {
  if (item >= 97 && item <= 122 && (item + shift > 122)) {
    return (item - 26) + shift
  } else if (item >= 97 && item <= 122) {
    return item + shift
  } else {
    return item
  }
})

// ASSIGNS LETTERS TO ASCII CODES
const asciiToAlpha = shiftAscii.map((item) => (String.fromCharCode(item)))

// JOINS ARRAY TO STRING W/O ,
const alphaToWords = asciiToAlpha.join("")

console.log(`CIPHER COMPLETE: ${alphaToWords}`)


// ALLOWS CAPS
// const shiftAscii = inputToAscii.map((item) => {
//   if (item !== 91, 92, 93, 94, 95, 96 && item >= 65 && item <= 90 || item >= 97 && item <= 122)
//     return item + shift
//   else if (item > 122) {
//     return (item -25) + shift