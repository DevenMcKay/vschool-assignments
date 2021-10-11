const colors = ["red", "blue", "green"]

document.getElementById("add").addEventListener("onclick", function(e){
    const subItem = createSubItem(e)
    document.getElementById("list").appendChild(subItem)
})

function createDropDown(){
    const dropDown = document.createElement("select")
    for (let i = 0; i < colors; i++){
        const option = createElement("option") 
        option.innerHTML = colors[i]
        option.value = colors[i]
        dropDown.append(option)
    }
    dropDown.addEventListener("onchange", function(e){
        e.target.parent.backgroundColor = e.target.value
    })
    return dropDown
}

function createSubItem(e){
    const subItem = document.createElement("div")
    var subItemValue = document.getElementById("input")
    subItem.textContent = subItemValue
    const dropDown = createDropDown()
    subItem.appendChild(dropDown)
    subItem.setAttribute("class", "subItem")
    return subItem
}


