const item = document.getElementById("itemBlock")
const form = document.myForm
const title = document.getElementsByClassName("title")
const price = document.getElementsByClassName("price")
const description = document.getElementsByClassName("description")
const image = document.getElementsByClassName("image")
const imageUrl = document.getElementsByClassName("imageUrl")
const editBtn = document.getElementsByClassName("edit")
const deleteBtn = document.getElementsByClassName("delete")
const checkBox = document.getElementsByClassName("completed")
const addBtn = document.getElementById("addBtn")

function getData() {
  axios.get("https://api.vschool.io/deven/todo")
    .then(result => listData(result.data))
    .catch(error => console.log(error))
    .finally(console.log("New Data Received"))
}

function listData(data) {
  clearList()
  for (i = 0; i < data.length; i++) {
    createItem(data, i)
  }
}

function clearList() {
  // CLEARS & UPDATES LIST (PREVENTS ITEMS FROM REPEATING AT END)
  while (item.firstChild) {
    item.removeChild(item.firstChild)
  } // item.innerHTML = "" //SIMPLE HTML CLEAR (Not supported in all browsers)
}

function createItem(data, i) {
  // CREATES DIV FOR LIST NEST
  newItem = document.createElement("div")
  newItem.innerHTML = form.innerHTML
  itemBlock.append(newItem)
  dataFill(data, i)
}

function dataFill(data, i) {
  // USER INPUT = DATA STORED 
  title[i].value = data[i].title
  price[i].value = data[i].price
  description[i].value = data[i].description
  image[i].src = data[i].imgUrl
  imageUrl[i].value = data[i].imgUrl
  // UNCHECKED / NOT DONE
  if (data[i].completed === false) {
    title[i].style.textDecoration = "none"
    price[i].style.textDecoration = "none"
    description[i].style.textDecoration = "none"
    // DONE
  } else if (data[i].completed === true) {
    checkBox[i].checked = "checked"
    title[i].style.textDecoration = "line-through"
    price[i].style.textDecoration = "line-through"
    description[i].style.textDecoration = "line-through"
  }
  completedBtnAssign(data, i)
  editBtnAssign(data, i)
  deleteBtnAssign(data, i)
}

function completedBtnAssign(data, i) {
  checkBox[i].addEventListener("change", function (e) {
    const address = "https://api.vschool.io/deven/todo/" + data[i]._id
    // DONE
    if (checkBox[i].checked === true) {
      // ENABLES LINE-THROUGH
      title[i].style.textDecoration = "line-through"
      price[i].style.textDecoration = "line-through"
      description[i].style.textDecoration = "line-through"
      axios.put(address, { "completed": true })
        .then(result => console.log("Box Check Success"))
        .catch(error => console.log(error))
      // UNCHECKED / NOT DONE 
    } if (checkBox[i].checked === false) {
      // REMOVES LINE-THROUGH
      title[i].style.textDecoration = "none"
      price[i].style.textDecoration = "none"
      description[i].style.textDecoration = "none"
      axios.put(address, { "completed": false })
        .then(result => console.log("Box Uncheck"))
        .catch(error => console.log(error))
    }
  })
}

function editBtnAssign(data, i) {
  editBtn[i].addEventListener("click", function () {
    const address = "https://api.vschool.io/deven/todo/" + data[i]._id
    if (editBtn[i].value === "EDIT") {
      // ENABLES EDITS BOXES
      title[i].removeAttribute("disabled")
      description[i].removeAttribute("disabled")
      price[i].removeAttribute("disabled")
      imageUrl[i].removeAttribute("disabled")
      editBtn[i].value = "SAVE"
      editBtn[i].style.backgroundColor = "#EFB162"
      addBtn.setAttribute("disabled", "disabled")
    } else if (editBtn[i].value === "SAVE") {
      // SAVES & DISABLES EDIT BOXES
      title[i].setAttribute("disabled", "disabled")
      const titleEdit = title[i].value
      description[i].setAttribute("disabled", "disabled")
      const descriptionEdit = description[i].value
      price[i].setAttribute("disabled", "disabled")
      const priceEdit = price[i].value
      imageUrl[i].setAttribute("disabled", "disabled")
      const imageUrlEdit = imageUrl[i].value
      editBtn[i].value = "EDIT"
      editBtn[i].style.backgroundColor = "white"
      addBtn.removeAttribute("disabled")
      axios.put(address, { "title": titleEdit, "description": descriptionEdit, "price": priceEdit, "imgUrl": imageUrlEdit })
        .then(result => console.log("Save Success!"))
        .catch(error => console.log(error))
    }
  })
}

function deleteBtnAssign(data, i) {
  deleteBtn[i].addEventListener("click", function () {
    alert("Item Deleted!")
    const address = "https://api.vschool.io/deven/todo/" + data[i]._id
    addBtn.removeAttribute("disabled")
    // REMOVES ELEMENT FROM PAGE
    this.parentElement.parentElement.remove()
    axios.delete(address)
      .then(result => console.log("Post Deleted!"))
      .catch(error => console.log(error))
  })
}

addBtn.addEventListener("click", function () {
  createEmptyItem()
})

function createEmptyItem() {
  // CREATES DIV FOR LIST NESTING
  newItem = document.createElement("div")
  newItem.innerHTML = form.innerHTML
  itemBlock.append(newItem)
  // FILLER TEXT (NEEDS TITLE TO SAVE)
  title.value = "Enter Title"
  description.value = "Enter Description Here"
  price.value = 0
  // VARIABLES CAPTURE & SAVE VALUES...USER INPUTS
  const titleEdit = title.value
  const priceEdit = price.value
  const descriptionEdit = description.value
  image.value = "https://placeimg.com/640/480/any"
  const imageUrlEdit = image.value
  axios.post("https://api.vschool.io/deven/todo/", { "title": titleEdit, "description": descriptionEdit, "price": priceEdit, "imgUrl": imageUrlEdit })
    .then(result => getData())
    .catch(error => console.log(error))
    .finally(console.log("Item Added!"))
}

getData() // STARTS JS