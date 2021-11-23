const item = document.getElementById("itemBlock")
const form = document.myForm

function getData() {
  axios.get("https://api.vschool.io/deven/todo/")
    .then(result => listData(result.data))
    .catch(error => console.log(error))
}
getData() // STARTS JS


function clearList() {
  // item.innerHTML = "" //SIMPLE HTML CLEAR (Not supported in all browsers)
  while (item.firstChild) {
    item.removeChild(item.firstChild)
  }
}

function dataFill(data, i) {
  // COLLECTS ALL VARIABLES
  let title = document.getElementsByClassName("title")[i]
  title.value = data[i].title
  let price = document.getElementsByClassName("price")[i]
  price.value = data[i].price
  let description = document.getElementsByClassName("description")[i]
  description.value = data[i].description
  let image = document.getElementsByClassName("image")[i]
  image.src = data[i].imgUrl
  let imageUrl = document.getElementsByClassName("imageUrl")[i]
  imageUrl.value = data[i].imgUrl

  completedBtnAssign(data, i)
  editBtnAssign(data, i)
  deleteBtnAssign(data, i)
}

function createItem(data, i) {
  // CREATES DIV FOR LIST NEST
  let list = "list" + [i]
  list = document.createElement("div")
  list.innerHTML = form.innerHTML
  itemBlock.append(list)
  dataFill(data, i)
}


function newPost(data) {
  document.getElementsByClassName("addBtn")[0].addEventListener("click", function () {
    // CREATES DIV FOR LIST NEST
    let i = (data.length)
    console.log(data.length + " Starts here")
    let list = "list" + [i]
    console.log(list)
    list = document.createElement("div")
    list.innerHTML = form.innerHTML
    // console.log(list[i])
    itemBlock.append(list)
    // COLLECTS ALL VARIABLES
    document.getElementsByClassName("title")[i].value = "Enter Title " + [i + 1]
    const titleEdit = document.getElementsByClassName("title")[i].value
    let price = document.getElementsByClassName("price")[i]
    price.value = 0
    const priceEdit = document.getElementsByClassName("price")[i].value
    let description = document.getElementsByClassName("description")[i]
    description.value = "Enter description"
    const descriptionEdit = document.getElementsByClassName("description")[i].value
    let image = document.getElementsByClassName("image")[i]
    image.src = ""
    let imageUrl = document.getElementsByClassName("imageUrl")[i]
    imageUrl.placeholder = "Enter Image URL"
    imageUrl.value = ""
    const imageUrlEdit = document.getElementsByClassName("imageUrl")[i].value
    document.getElementsByClassName("edit")[i].value = "SAVE"
    // document.getElementsByClassName("edit")[i].click()
    // data.length++
    console.log(data.length + " Added 1")
    axios.post("https://api.vschool.io/deven/todo/", { "title": titleEdit, "description": descriptionEdit, "price": priceEdit, "imgUrl": imageUrlEdit, "completed": false })
      .then(result => newData(result.data))
      .catch(error => console.log(error))
    function newData(data) {
      console.log(data)
      // completedBtnAssign(data, i)
      //   editBtnAssign(data, i)
      deleteBtnAssign(data, i)
    }
    // console.log(data[i]._id)
  })
}



function listData(data) {
  clearList()
  for (let i = 0; i < data.length; i++) {
    createItem(data, i)
  }
  newPost(data)
}


function completedBtnAssign(data, i) {
  document.getElementsByClassName("completed")[i].addEventListener("change", function (e) {
    const address = "https://api.vschool.io/deven/todo/" + data[i]._id
    if (document.getElementsByClassName("completed")[i].checked === true) {
      // ENABLES LINE-THROUGH
      document.getElementsByClassName("title")[i].style.textDecoration = "line-through"
      document.getElementsByClassName("price")[i].style.textDecoration = "line-through"
      document.getElementsByClassName("description")[i].style.textDecoration = "line-through"
      axios.put(address, { "completed": true })
        .then(result => console.log(result))
        .catch(error => console.log(error))
    } if (document.getElementsByClassName("completed")[i].checked === false) {
      // REMOVES LINE-THROUGH
      document.getElementsByClassName("title")[i].style.textDecoration = "none"
      document.getElementsByClassName("price")[i].style.textDecoration = "none"
      document.getElementsByClassName("description")[i].style.textDecoration = "none"
      axios.put(address, { "completed": false })
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }
  })
}

function editBtnAssign(data, i) {
  document.getElementsByClassName("edit")[i].addEventListener("click", function () {
    const address = "https://api.vschool.io/deven/todo/" + data[i]._id
    if (document.getElementsByClassName("edit")[i].value === "EDIT") {
      // ENABLES EDITS BOXES
      document.getElementsByClassName("title")[i].removeAttribute("disabled")
      document.getElementsByClassName("description")[i].removeAttribute("disabled")
      document.getElementsByClassName("price")[i].removeAttribute("disabled")
      document.getElementsByClassName("imageUrl")[i].removeAttribute("disabled")
      document.getElementsByClassName("edit")[i].value = "SAVE"
    } else if (document.getElementsByClassName("edit")[i].value === "SAVE") {
      // SAVES & DISABLES EDIT BOXES
      document.getElementsByClassName("title")[i].setAttribute("disabled", "disabled")
      const titleEdit = document.getElementsByClassName("title")[i].value
      document.getElementsByClassName("description")[i].setAttribute("disabled", "disabled")
      const descriptionEdit = document.getElementsByClassName("description")[i].value
      document.getElementsByClassName("price")[i].setAttribute("disabled", "disabled")
      const priceEdit = document.getElementsByClassName("price")[i].value
      document.getElementsByClassName("imageUrl")[i].setAttribute("disabled", "disabled")
      const imageUrlEdit = document.getElementsByClassName("imageUrl")[i].value
      document.getElementsByClassName("edit")[i].value = "EDIT"
      axios.put(address, { "title": titleEdit, "description": descriptionEdit, "price": priceEdit, "imgUrl": imageUrlEdit })
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }
  })
}

function deleteBtnAssign(data, i) {

  const address = "https://api.vschool.io/deven/todo/" + data[i]._id
  document.getElementsByClassName("delete")[i].addEventListener("click", function () {
    console.log(data[i])
    console.log(data[i]._id)
    this.parentElement.parentElement.remove()
    axios.delete(address)
      .then(result => console.log(result))
      .catch(error => console.log(error))
  })
}





