
const totalBtn = document.getElementById("totalBtn")
let isClicked = false

totalBtn.addEventListener("click", function (event) {
  event.preventDefault()
  const bob = document.getElementById("bob-ombNumb").value
  const cheep = document.getElementById("cheepNum").value
  const goomba = document.getElementById("goombaNum").value
  // Creates Lower Section Para 
  clickInstruct = document.createElement("p")
  clickInstruct.innerHTML += "<p class='instruct'>Double Click to Clear</p>"
  // isClicked starts false, on first click message appears and won't duplicate
  // Due to is Clicked turning true after first click
  if (isClicked === false) {
    document.getElementById("low").append(clickInstruct)
    document.getElementById("totalBtn").style.fontSize = "5.5rem"
  } isClicked = true
  const total = ((bob * 7) + (cheep * 11) + (goomba * 5))
  return document.getElementById("totalBtn").textContent = total
})

// Clears All Inputs on Double Click
totalBtn.addEventListener("dblclick", function (event) {
  event.preventDefault()
  document.getElementById("bob-ombNumb").value = 0
  document.getElementById("cheepNum").value = 0
  document.getElementById("goombaNum").value = 0
  document.getElementById("totalBtn").textContent = 0

})
