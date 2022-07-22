const main = document.getElementsByTagName("main")
const h1 = document.createElement("h1")
h1.textContent = h1.style.backgroundColor = "Red"
h1.classList = "see"
main[0].appendChild(h1)

const button = document.createElement("button")
button.textContent = "Click"
button.style.marginLeft = "10px"

h1.append(button)

main[0].addEventListener("mouseover", () => {
  h1.classList.remove("see")
})

button.addEventListener("click", () => {
  h1.style.backgroundColor = "white"
  h1.classList.toggle("border")
})

document.addEventListener("keypress", (e) => {
  console.log(e.key)
})

const form = document.myForm

const div = document.getElementsByTagName("div")

const formButton = document.getElementsByTagName("button")
formButton[0].style["background-color"] = "yellow"

form.addEventListener("submit", function(e){
  e.preventDefault()
  document.body.classList.toggle("red")
  const userName = form.name.value
  const h1 = document.createElement("h1")
  h1.textContent = userName
  div[0].append(h1)
  form.name.value = ""
  
})

console.log(form)


// Object.keys(window).forEach(key => {
//   // console.log('✅', key)
//   if (/^on/.test(key)) {
//       window.addEventListener(key.slice(2), event => {
//           console.log(event.type);
//       });
//   }
// });

