// GET's THE TODO's FROM THE DATABASE (FUNCTION DECLARED)
function getData(){
  axios.get("https://api.vschool.io/deven/todo")
      .then(res => listData(res.data))
      .catch(err => console.log(err))
}

// LISTS THE TODO TITLES TO THE DOM (FUNCTION DECLARED)
function listData(data){
  // Uncomment code Below v to also clear post so they don't repeat when submitted but is not supported in all browsers
  
  // document.getElementById('todo-list').innerHTML = ""
  
  // RUNS CLEARLIST()
  clearList()
  // ADDS TITLE TO HTML PAGE
  for(let i = 0; i < data.length; i++){
      const h1 = document.createElement('h1')
      h1.textContent = data[i].title
      document.getElementById('todo-list').appendChild(h1)
  }
}

// FUNCTION CLEARS PREVIOUS POSTED DATA/TITLES WHEN THERE IS A FIRSTCHILD PRESENT (FUNCTION DECLARED)
function clearList(){
  const el = document.getElementById('todo-list')
  while(el.firstChild){
      el.removeChild(el.firstChild)
  }
}

// FIRST FUNCTION TO RUN
getData()

// FORM FOR THE POST REQUEST
const todoForm = document["todo-form"]

// WAITS FOR PAGE / BUTTON SUBMIT 
todoForm.addEventListener("submit", function(e){
  e.preventDefault()
  
  // PULLS USER ENTERED TEXT
  const newTodo = {
      title: todoForm.title.value
  }
  // CLEARS TEXT BOX
  todoForm.title.value = ""
  
  //  POSTS TODO TITLE AND RUNS GETDATA() FUNCTION
  axios.post("https://api.vschool.io/deven/todo", newTodo)
      .then(res => getData())
      .catch(err => console.log(err))
})

