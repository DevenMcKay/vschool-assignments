function sayHello(){
  console.log("Hello!");
}
const intervalID = setInterval(sayHello, 1000);

document.body.addEventListener("click", function(){
  clearInterval(intervalID)

})