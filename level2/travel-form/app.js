

form.addEventListener("submit", function(event){
  event.preventDefault()
  const firstName = form.firstName.value
  const lastName = form.lastName.value
  const age = form.age.value
  const gender = form.gender.value
  // Each Radio button needs captured to clear
  const male = document.getElementById("male")
  const female = document.getElementById("female")
  const location = form.city.value
  // New Array for checked boxes 
  const checkedDiet = []
  // Loop to check each checked box status 
  const checkedBoxes = document.querySelectorAll("input[name=diet]:checked");
    for (let i = 0; i <checkedBoxes.length; i++) {
      checkedDiet.push(checkedBoxes[i].value);
    }
    const vegetarian = document.getElementById("vegetarian")
    const kosher= document.getElementById("kosher")
    const lactose = document.getElementById("lactose")
    


  alert(`
  First name: ${firstName}
  Last name: ${lastName}
  Age: ${age}
  Gender: ${gender}
  Location: ${location}
  Dietary Restrictions: ${checkedDiet}



`)
  
  form.firstName.value = "" ;
  form.lastName.value = "" ;
  form.age.value = "" ; 
  // Clears each radio button
  male.checked = false
  female.checked = false
  form.city.value = "" ;
  // Clears each check box
  vegetarian.checked = false
  kosher.checked = false
  lactose.checked = false


})
