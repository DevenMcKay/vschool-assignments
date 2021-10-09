let things = document.getElementsByClassName("fancy-text");
for (let i = 0; i < things.length; i++) {
  console.log(things[i].innerText)
  things[i].textContent = "Edited"
}
