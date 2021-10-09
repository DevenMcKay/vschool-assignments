let change = document.getElementById("square")

//Default Color / State
change.addEventListener("mouseout", function(){
  change.style.backgroundColor = "whitesmoke"
})

change.addEventListener("mouseover", function(){
  change.style.backgroundColor = "blue"
})

change.addEventListener("mousedown", function(){
  change.style.backgroundColor = "red"
})

change.addEventListener("mouseup", function(){
  change.style.backgroundColor = "yellow"
})

// Used this to select change()
change.addEventListener("dblclick", function(){
  this.style.backgroundColor = "green"
})

window.addEventListener("wheel" , function() {
  change.style.backgroundColor = "orange"
})

document.addEventListener("keydown", function() {
  if (event.which === 66){
    change.style.backgroundColor = "blue"
  } else if (event.which === 82){
    change.style.backgroundColor = "red"
  } else if (event.which === 89){
    change.style.backgroundColor = "yellow"
  } else if (event.which === 71){
    change.style.backgroundColor = "green"
  } else if (event.which === 79){
    change.style.backgroundColor = "orange"
  } else {
    //Defualt Color / State
    change.style.backgroundColor = "whitesmoke"
  }
})

