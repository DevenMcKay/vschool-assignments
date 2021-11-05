// Adds pear to top list only
const newLi = document.createElement("li")
newLi.innerHTML += "Pear"
document.getElementsByTagName("ol")[0].append(newLi)

// Adds Yellow BG to Second Element w/ "ripe" Class  
document.getElementsByClassName("ripe")[1].style.backgroundColor = "yellow"

// Selects 4th li and changes BG
document.getElementsByTagName("li")[3].style.backgroundColor = "red"


const keys = Object.keys(document)
console.log(keys)