addition.addEventListener("submit", function (event) {
  // Prevents Reset
  event.preventDefault()
  // If there is an answer block this will replace it with new answer
  if (document.getElementById("removeAdd") !== null) {
    document.getElementById("removeAdd").parentElement.remove();
  }
  // Gets the integer numbers   
  const add1 = parseInt(addition.num1.value)
  const add2 = parseInt(addition.num2.value)
  // Adds integers 
  sum = add1 + add2
  // Creates h2
  const h2 = document.createElement("h2")
  // Gives h2 the id to remove later
  h2.innerHTML = `<h2 id='removeAdd'>Answer</h2><h2 id='removeAdd'>${sum}</h2>`
  // Adds Answer block
  document.getElementById("addLine").append(h2)
  // Zeros out user input boxes
  addition.num1.value = 0
  addition.num2.value = 0
})

subtraction.addEventListener("submit", function (event) {
  event.preventDefault()
  if (document.getElementById("removeSub") !== null) {
    document.getElementById("removeSub").parentElement.remove();
  }
  const sub1 = parseInt(subtraction.num1.value)
  const sub2 = parseInt(subtraction.num2.value)
  diff = sub1 - sub2
  const h2 = document.createElement("h2")
  h2.innerHTML = `<h2 id='removeSub'>Answer</h2><h2 id='removeSub'>${diff}</h2>`
  document.getElementById("subLine").append(h2)
  subtraction.num1.value = 0
  subtraction.num2.value = 0
})

multiply.addEventListener("submit", function (event) {
  event.preventDefault()
  if (document.getElementById("removeMul") !== null) {
    document.getElementById("removeMul").parentElement.remove();
  }
  const mul1 = parseInt(multiply.num1.value)
  const mul2 = parseInt(multiply.num2.value)
  prod = mul1 * mul2
  const h2 = document.createElement("h2")
  h2.innerHTML = `<h2 id='removeMul'>Answer</h2><h2 id='removeMul'>${prod}</h2>`
  document.getElementById("mulLine").append(h2)
  multiply.num1.value = 0
  multiply.num2.value = 0
})