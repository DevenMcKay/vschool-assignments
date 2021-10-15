// const list = document.getElementById("List")
const list = document.getElementById("list")

//Input text is added to list
addItem.addEventListener("submit", function(event){
  event.preventDefault()
  let item = addItem.title.value
  let li = document.createElement("li")
  const listed = li.innerHTML += `<li><div>${item}</div><button>edit</button><button class="delete">X</button></li>`
  list.append(li)
  //Clears User Input
  addItem.title.value = ""

  //.querySelector and getByElementsByClassName() return an Array-like NodeList (this applies click funtions to .delete buttons)
  const deleteItemBtn = document.querySelectorAll(".delete")
  deleteItemBtn.forEach( function(e){
    e.addEventListener(`click`,function(){
        console.log(`clicked`);
        this.parentElement.parentElement.remove("li")
        // li.parentNode.removeChild(li)
    });
  })
});





// Attempt to get delete btn w/o class
// const deleteItemBtn = document.querySelector("li > button:nth-of-type(2)")




// const deleteItemBtn = document.querySelectorAll(".delete");
// for (i = 0; i < deleteItemBtn.length; i++){
//   deleteItemBtn[i].style.backgroundColor = "red"; 
  
// }

// deleteItemBtn.addEventListener("click", function(){
//   console.log("delete")

// })

