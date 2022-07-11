// Header Insert
let myHeader = document.getElementById("header")
myHeader.innerHTML += "<div class='header'><h1>JavaScript Made This!!</h1><h2><span class='name'>Deven </span>wrote the JavaScript</h2></div>"

// User Message Input 
document.querySelector("input").value = "Thanks! Goodbye"
// Change Messages
let topLeftMessage = document.getElementsByClassName("message left")[0]
topLeftMessage.textContent = "What type of sandal does a frog wear?"

let bottomLeftMessage = document.getElementsByClassName("message left")[1]
bottomLeftMessage.textContent = "Open-toad!"

let topRightMessage = document.getElementsByClassName("message right")[0]
topRightMessage.textContent = "I don't know"

let bottomRightMessage = document.getElementsByClassName("message right")[1]
bottomRightMessage.textContent = "LOL"

// Clear all messages 
let userReply = document.getElementsByClassName("messages")[0]

function clearAllMessages() {
  userReply.textContent = "";
}

let clearBtn = document.getElementById("clear-button")
clearBtn.addEventListener("click", clearAllMessages);

// Theme Select

let leftMessages = document.getElementsByClassName("message left")

let rightMessages = document.getElementsByClassName("message right")

let themeDropdown = document.querySelector("#theme-drop-down")

themeDropdown.addEventListener("change", function () {
  messageStyle()
}
)

function messageStyle() {
  if (themeDropdown.value === "theme-one") {
    for (let i = 0; i < leftMessages.length; i++) {
      leftMessages[i].style.backgroundColor = "burlywood"
    }
    for (let i = 0; i < rightMessages.length; i++) {
      rightMessages[i].style.backgroundColor = "lightblue"
      userReply.style.color = "black"
    }
  } else if (themeDropdown.value === "theme-two") {
    for (let i = 0; i < leftMessages.length; i++) {
      leftMessages[i].style.backgroundColor = "red"
    }
    for (let i = 0; i < rightMessages.length; i++) {
      rightMessages[i].style.backgroundColor = "black"
      userReply.style.color = "white"
    }
  }
}

// More Messages
let i = 0
document.querySelector("form > button").addEventListener("click", function (event) {
  event.preventDefault()
  let reply = document.querySelector("input").value
  if (i % 2 === 0) {
    i++
    userReply.innerHTML += `<p class="message left">${reply}</p>`
  } else if (i % 2 !== 0) {
    i++
    userReply.innerHTML += `<p class="message right">${reply}</p>`
  }
  //  messageStyle()
  document.querySelector("input").value = ""
  messageStyle()
})







