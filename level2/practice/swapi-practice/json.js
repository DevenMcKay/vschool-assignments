// Start Coin Flip Example 
// function flipCoin(){
//     return new Promise(function(resolve, reject) {
//         const randomNum = Math.floor(Math.random() * 2)
//         if(randomNum === 0){
//             resolve("HEADS")
//         } else if(randomNum === 1){
//             reject("TAILS")
//         }})
// }
// flipCoin()
//     .then(function(response) { console.log("RESOLVED: " + response)})
//     .catch(error => console.log("REJECTED: " + error))
    // console.log(response)
// End Coin Flip Example 



// // Start XHR Request (Returns people count in Star Wars API)
// const xhr = new XMLHttpRequest()
//         // method  // url                     // async?
// xhr.open("GET", "https://swapi.dev/api/people", true)
// xhr.send()

// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 && xhr.status === 200){
//         console.log(xhr.responseText)
//     }
// }
//  // End XHR Request 



// // Start Helper XHR
// // Helper function that will get data from a given URL parameter
// // and passes the data to a callback function so the programmer
// // can do whatever they want with that data
// function getData(url, callback) {
//     const xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const jsonData = xhr.responseText
//             const data = JSON.parse(jsonData)
//             console.log("HERE") // Inserted to demonstrate order
//             console.log(data) // Inserted to demonstrate order
//             return callback(data)
//         }
//     }

//     xhr.open("GET", url, true)
//     xhr.send()
// }

// // Use our helper function to get the Luke Skywalker resource from the API
// // Notice we need to nest a second `getData` inside the first one's callback function
// // because we didn't get all the data we needed from just the first URL call alone
// getData("https://swapi.dev/api/people/1", function (lukeData) {
//     console.log(lukeData.homeworld) // logs "https://swapi.co/api/planets/1" instead of "Tatooine"
//     // Here we need to make the second call to the homeworld URL so we can get its name
//     getData(lukeData.homeworld, function (planetData) {
//         lukeData.homeworld = planetData.name // replace the URL with the actual name in the lukeData object
//         console.log(lukeData.homeworld) // now logs "Tatooine"! Yay!
//         // Now while we're inside this double-nested function we can do stuff with the data we got.
//     })
// }) // End Helper XHR



// // Start Async Example 
// // Changed up this function because it's so simplified due to async/await that we
// // don't necessarily need to create a helper function at all!
// async function getData() {
//     // Every time you see the `await` keyword, the function will pause and wait
//     // for the next asynchronous call (like fetch) to finish before moving on
//     const lukeResponse = await fetch("https://swapi.dev/api/people/1")
//     const lukeData = await lukeResponse.json()
//     console.log(lukeData.homeworld)  // Logs "https://swapi.co/api/planets/1"

//     const planetResponse = await fetch(lukeData.homeworld)
//     const planetData = await planetResponse.json()
//     console.log(planetData.name)  // Logs "Tatooine"!

//     // Reset the lukeData.homeworld to be the planet name instead of just the URL
//     lukeData.homeworld = planetData.name

//     // Resolve the automatically-created promise with the lukeData we've built
//     return lukeData
// }

// // async functions automatically return promises and resolve with whatever
// // got returned from that function. So eventually we'll need to use a .then()
// // to get the value, unless we're inside another async function.
// getData()
//     .then(lukeData => console.log(lukeData))
// // End Async Example 




