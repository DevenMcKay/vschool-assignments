// Required on all axios after npm package download or CDN 
const axios = require("axios"); // Uncomment if run via node

// Start Long get request 
// function assignResponseToVariable(response){
//     console.log(response.data);
// }
// axios.get('https://swapi.dev/api/people/1').then(assignResponseToVariable)
// End Long get request 


// // Start Simplified Get Request 
// axios.get('https://swapi.dev/api/people/1').then(response => {
//     console.log(response.data);
// })
// // End Simplified Get Request 


// // Start Error Example (Code gives error)
// axios.get('https://swapi.dev/api/peopl').then(response => {
//     console.log(response.data);
//   }).catch(error => {
//     console.log(error)
//   });
// // End Error Example


// axios.get('https://api.vschool.io/suzan/todo/').then(response => {
//   console.log(response)
// })

// // Start Axios Post example 
// axios.post('https://api.vschool.io/deven/todo/', newTodo).then(response => {
//     console.log(response.data);
//   }).catch(error => {
//     console.log(error)
//   });
// // End Axios Post example 

// // Start of Axios .PUT() Example
// axios.put('https://api.vschool.io/suzan/todo/5d0d36055723f72a73236f26', editedTodo).then(response => {
//   console.log(response.data);
// }).catch(error => {
//   console.log(error)
// });
// // End of Axios .PUT() Example

// Start of axios Delete() example 
axios.delete('https://api.vschool.io/deven/todo/61966d28ee6f8d3fc3fef5bb').then(response => {
  console.log(response.data);
}).catch(error => {
  console.log(error)
});
// End of axios Delete() example 


// // Start of Post Todo Example
// const todoForm = document.todoform
// todoForm.addEventListener("submit", function (event) {
//   event.preventDefault()
//   const newTodo = {
//     title: todoForm.title.value,
//     description: todoForm.description.value,
//     imgUrl: todoForm.imgUrl.value
//   }
//   axios.post("https://api.vschool.io/deven/todo", newTodo)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))
// })
// // End of Post Todo Example