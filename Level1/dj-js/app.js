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

document.addEventListener("keydown", function(event) {
  // console.log(event.key)
  if (event.key === "b"){
    change.style.backgroundColor = "blue"
  } else if (event.key === "r"){
    change.style.backgroundColor = "red"
  } else if (event.key === "y"){
    change.style.backgroundColor = "yellow"
  } else if (event.key === "g"){
    change.style.backgroundColor = "green"
  } else if (event.key === "o"){
    change.style.backgroundColor = "orange"
  } else {
    //Defualt Color / State
    change.style.backgroundColor = "whitesmoke"
  }
})

