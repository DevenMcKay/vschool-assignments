// Background Color Functions 
function blue() { document.body.style.backgroundColor = "skyblue" }
function white() { document.body.style.backgroundColor = "white" }
function pink() { document.body.style.backgroundColor = "lightpink" }
blue()

// Background Color changer
function colorChange() {
  if (document.body.style.backgroundColor === "skyblue") {
    white()
  } else if (document.body.style.backgroundColor === "white") {
    pink()
  } else if (document.body.style.backgroundColor === "lightpink") {
    blue()
  }
}

// Sets High Score and Changes text
let highScore = localStorage.getItem("High Score")
function highScoreStorage() {
  let score = clicks
  if (score >= highScore) {
    localStorage.setItem("High Score", clicks)
    document.getElementById("high-score").textContent = `NEW HIGH SCORE = ${clicks}`
    document.getElementById("high-score").style.backgroundColor = "red"
  }
}

// Does not display null if High Score is not set
if (highScore !== null) {
  document.getElementById("high-score").append(`High Score: ${highScore}`)
}
// Starts timer used as an on switch so timer function called once 
isStart = true

// Starts counter at 0 and captures counter text
document.getElementById("counter").textContent = 0
let clicks = document.getElementById("counter").textContent

// Click Event Listener 
document.body.addEventListener("click", clickEvents)

// Click function
function clickEvents() {
  // ++clicks forces clicks to start at 0, clicks++ needs 2 clicks to get 1 
  document.getElementById("counter").textContent = ++clicks
  colorChange()
  highScoreStorage()
  if (isStart === true) {
    startClock()
  }
  isStart = false
}

// Starts timer at 30 counts down to 0 every sec and stops 
let timer = 30
function startClock() {
  let intervalID = setInterval(function () {
    let countDown = --timer
    document.getElementById("countdown").textContent = `Timer: ${countDown}`
    // Stops countdown
    if (countDown === 0) {
      return clearInterval(intervalID)
    }
    // Allows count down to synch with clicks (removeEvent happened earlier prior)
  }, 999)
}

// Ends Click input after 30 secs 
setTimeout(function () {
  document.body.removeEventListener("click", clickEvents)
}, 30000)

// Extra Code (Auto Background Color Changer no clicks needed)
// setInterval(function(){
// if (document.body.style.backgroundColor === "skyblue") {
//   white()
// } else if (document.body.style.backgroundColor === "white") {
//   pink()
// } else if (document.body.style.backgroundColor === "lightpink") {
//   blue()
// }
//  },400)
// Starts with white 