// const list = document.getElementById("List")
const list = document.getElementById("list")

//Input text is added to list
addItem.addEventListener("submit", function (event) {
  event.preventDefault()
  let item = addItem.title.value
  let li = document.createElement("li")
  const listed = li.innerHTML += `<li><div>${item}</div><button class="edit">edit</button><button class="delete">X</button></li>`
  list.append(li)

  //Clears User Input
  addItem.title.value = ""

  // .querySelector and getByElementsByClassName() return an Array-like NodeList 
  // (this applies click funtions to .delete buttons) and removes li on delete
  const deleteItemBtn = document.querySelectorAll(".delete")
  deleteItemBtn.forEach(function (e) {
    e.addEventListener(`click`, function () {
      this.parentElement.parentElement.remove("li")
    });
  })

  // OnClick creates edit form
  const editItemBtn = document.querySelectorAll(".edit")
  editItemBtn.forEach(function (e) {
    e.addEventListener(`click`, function () {
      this.innerHTML = "<input class='editBtn' type='button' value='save' form='quantity'/>"
      this.parentElement.innerHTML += "<form id='quantity'><input type='number'></form>"

      // New Save Button
      const editBtn = document.querySelectorAll(".editBtn")
      editBtn.forEach(function (e) {
        e.addEventListener(`click`, function () {
          this.value = "edit"
          // console.log(this.quantity.value)

        }
        )
      })


    });
  });

})





// Attempt to get delete btn w/o class
// const deleteItemBtn = document.querySelector("li > button:nth-of-type(2)")


// const deleteItemBtn = document.querySelectorAll(".delete");
// for (i = 0; i < deleteItemBtn.length; i++){
//   deleteItemBtn[i].style.backgroundColor = "red"; 
// }


// deleteItemBtn.addEventListener("click", function(){
//   console.log("delete")
// })

