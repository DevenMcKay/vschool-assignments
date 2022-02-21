var leftBtn = document.getElementById("left-btn")
leftBtn.addEventListener("click", function() {
  window.alert("Water Applied!");
  document.body.style.backgroundImage = "none"
  document.body.style.backgroundColor = "blue"
});

var rightBtn = document.getElementById("right-btn")
rightBtn.addEventListener("dblclick", function() {
  window.alert("Gas Applied!");
  document.body.style.backgroundImage = "none"
  document.body.style.backgroundColor = "firebrick"
});

for (i = 10; i < 23; i++){
console.log(i)
}

var sports = 'football'

if (sports === 'football'){
console.log('do this ')
} else if (sports === 'golf'){
  console.log('i am something else')
} else {
  console.log("i am none of the above i think")
}

var nflPlayer= {
  name: ' aaron rodgers',
  isActive: false,
  teamMates: ['TE','OL'],
  number: 12
}
