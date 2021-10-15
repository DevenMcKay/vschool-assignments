// Header Insert
let myHeader = document.getElementById("header")
myHeader.innerHTML += "<div class='header'><h1>JavaScript Made This!!</h1><h2><span class='name'>Deven </span>wrote the JavaScript</h2></div>"

// Change Messages
let topLeftMessage = document.getElementsByClassName("message left")[0]
topLeftMessage.textContent = "What type of sandel does a frog wear?"

let bottomLeftMessage = document.getElementsByClassName("message left")[1]
bottomLeftMessage.textContent = "Open-toad!"

let topRightMessage = document.getElementsByClassName("message right")[0]
topRightMessage.textContent = "I don't know"

let bottomRightMessage = document.getElementsByClassName("message right")[1]
bottomRightMessage.textContent = "LOL"

// Clear all messages 
let allMessages = document.getElementsByClassName("messages")[0]

function clearAllMessages(){
  allMessages.textContent = "";
}

let clearBtn = document.getElementById("clear-button")
clearBtn.addEventListener("click", clearAllMessages);

// Theme Select

let leftMessages = document.getElementsByClassName("message left")

let rightMessages = document.getElementsByClassName("message right")

document.querySelector("#theme-drop-down").addEventListener("change", function() {
    if (this.value === "theme-one") {
      for (let i = 0; i < leftMessages.length; i++){
      leftMessages[i].style.backgroundColor = "burlywood"}
      for (let i = 0; i < rightMessages.length; i++){
      rightMessages[i].style.backgroundColor = "lightblue"
      allMessages.style.color = "black"}
    } else if (this.value === "theme-two") {
      for (let i = 0; i < leftMessages.length; i++){
      leftMessages[i].style.backgroundColor = "red"}
      for (let i = 0; i < rightMessages.length; i++){
      rightMessages[i].style.backgroundColor = "black"
      allMessages.style.color = "white"}
      }
    }
);

// ------------- Inefficient (Doesn't change new posts) -----------------
//
// let theme = document.querySelector("#theme-drop-down").value
// document.querySelector("#theme-drop-down").addEventListener("change", function() {
//     if (this.value === "theme-one") {
//       topLeftMessage.style.backgroundColor = "burlywood"
//       bottomLeftMessage.style.backgroundColor = "burlywood"
//       topRightMessage.style.backgroundColor = "lightblue"
//       bottomRightMessage.style.backgroundColor = "lightblue"
//       allMessages.style.color = "black"
//     } else if (this.value === "theme-two"){
//       topLeftMessage.style.backgroundColor = "red"
//       bottomLeftMessage.style.backgroundColor = "red"
//       topRightMessage.style.backgroundColor = "black"
//       bottomRightMessage.style.backgroundColor = "black" 
//       allMessages.style.color = "white"
//     }
// });

// More Messages
let reply = document.querySelector("input").value
let i = 0
document.querySelector("form > button").addEventListener("click", function(event) { 
  if (i % 2 === 0){
    i++
  event.preventDefault()
  allMessages.innerHTML += `<p class="message left">${reply}</p>`
  } else if (i % 2 !== 0){
    i++
    event.preventDefault()
    allMessages.innerHTML += `<p class="message right">${reply}</p>`
  }
})







