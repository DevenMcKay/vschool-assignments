/**  Loop Array ***
let random = Math.random();
if (random < 0.5) {
    console.log("Your number is less than 0.5")
    console.log(random);
}
if (random > 0.5) {
  console.log("Your number is greater than 0.5")
  console.log(random);
}
**/

/** Days of the week ***
function returnDay(day) {
  if (day <= 0) {
    return (null)
  } else if (day === 1) {
    return ("Monday")
  } else if (day === 2) {
    return ("Tuesday")
  } else if (day === 3) {
    return ("Wednesday")
  } else if (day === 4) {
    return ("Thursday")
  } else if (day === 5) {
    return ("Friday")
  } else if (day === 6) {
    return ("Saturday")
  } else if (day === 7) {
    return ("Sunday")
  } else if (day >= 8) {
    return (null)
  }
}
**/

