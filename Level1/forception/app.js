var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

// For Loop people and alphabet
// for (i = 0; i < people.length; i++) {
//   console.log(people, alphabet);
// }


//Alpha Split and Capped
// var upperAlpha = alphabet.toUpperCase()
// var  alpha = upperAlpha.split("")
// console.log(alpha)


// Prints each person followed by alphabet
// people.forEach(function(person) {
//   console.log(person, alphabet);
// })


function forception(people, alphabet) {
  
  // Alphabet uppercase and split 
  var upperAlpha = alphabet.toUpperCase()
  var  alpha = upperAlpha.split("")
  
  // Array everything is nested in
  newArray = []

  //Outside For Loop (Name)
   for (i = 0; i < people.length; i++) {
    newArray.push(people[i] + ":")

    //Inside For Loop (Alpha)
    for (j= 0; j < alpha.length; j++){
      newArray.push(alpha[j]) 
    }
   }
   console.log(newArray)
}

// Call
forception(people, alphabet)
