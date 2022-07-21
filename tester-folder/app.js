const main = document.getElementsByTagName("main")
const h1 = document.createElement("h1")
h1.textContent = h1.style.backgroundColor = "Red"
main[0].appendChild(h1)

const button = document.createElement("button")
button.textContent = "Click"
button.style.marginLeft = "10px" 

h1.append(button)

main[0].addEventListener("mouseover", ()=> {
  console.log("red")
})

button.addEventListener("click", ()=> {
  console.log("Clicked")
})

document.addEventListener("keypress", (e)=> {
  console.log(e)
})

// Object.keys(window).forEach(key => {
//   // console.log('✅', key)
//   if (/^on/.test(key)) {
//       window.addEventListener(key.slice(2), event => {
//           console.log(event.type);
//       });
//   }
// });

