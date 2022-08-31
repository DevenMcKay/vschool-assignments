// const list = document.getElementById("List")
const list = document.getElementById("list")

// setAttribute example
const main = document.querySelector(".main")
main.setAttribute("id","ZZZZZ")

const newColor = document.querySelector("#ZZZZZ")
newColor.style.backgroundColor = "red"

//Input text is added to list
addItem.addEventListener("submit", function (event) {
  event.preventDefault()
  let item = addItem.title.value
  let li = document.createElement("li")
  li.innerHTML += `<li id="listItem"><div><p>${item}</p><p id='quantityAmount'></p></div><div><button id="edit" value="edit">Edit</button><button id="delete">X</button></div></li>`
  list.append(li)

  //Clears User Input
  addItem.title.value = ""

  // .querySelector and getByElementsByClassName() return an Array-like NodeList 
  // (this applies click functions to .delete buttons) and removes li on delete
  const deleteItemBtn = document.querySelectorAll("#delete")

  deleteItemBtn.forEach(function (e) {
    e.addEventListener(`click`, function () {
      this.parentElement.parentElement.parentElement.remove()
    });
  })

  // OnClick creates edit form (edit button capture per list item)
  const editItemBtn = li.querySelectorAll("#edit")
  editItemBtn.forEach(function (e) {

    e.addEventListener(`click`, function () {
      // Changes button function
      if (editItemBtn[0].value === "edit") {
        this.value = "save"
        this.textContent = "Save"
        this.type = "submit"
        this.form = "quantity"

        //New Quantity Form
        let form = document.createElement("form")
        form.innerHTML += `<form><input id='quantity' type='number' value=${li.querySelector("#quantityAmount").textContent} placeholder='Enter Quantity...'></form>`
        li.append(form)
      }

      else if (editItemBtn[0].value === "save") {
        // Capture para textContent and form value to fill
        const quantity = li.querySelector("#quantity")
        let quantityAmount = li.querySelector("#quantityAmount")
        this.value = "edit"
        this.textContent = "Edit"
        quantityAmount.textContent = quantity.value
        quantity.remove("form")
      }
    })

  })
})
