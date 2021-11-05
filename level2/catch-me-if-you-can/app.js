// 1a. Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number

function sum(x, y) {
  try {
    if (typeof x !== "number") {
      throw new Error("First input must be a number")
    }
    else if (typeof y !== "number") {
      throw new Error("Second input must be a number")
    }
  }
  catch (err) {
    console.log(err)
  }
  finally {
    return x + y;
  }
}
// Error v
// console.log(sum("1",1))
// No Error v 
console.log(sum(1, 1))

// 1b. Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

function sum(x, y) {
  return x + y;
}
let answer
try {
  // Produces Error v
  // answer = sum("1","2")
  // No Errors v
  answer = sum(1, 2)
  if (typeof answer !== "number") {
    throw new Error("Both inputs must be a numbers")
  }
}
catch (error) {
  console.log(error)
}
finally {
  console.log(answer)
}


// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = { username: "sam", password: "123abc" };
function login2a(username, password) {
  try {
    if (username !== "sam") {
      throw new Error("Invalid Username")
    } else if (password !== "123abc") {
      throw new Error("Invalid Password")
    } else {
      console.log("2a Login Successful!")
    }
  }
  catch (error) {
    console.log(error)
  }
}

login2a("sam", "123abc")

// 2b) Call the `login` function within a `try` block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

var user = { username: "sam", password: "123abc" };
function login2b(username, password) {
  if (username !== "sam") {
    throw new Error("2b Invalid Username")
  } else if (password !== "123abc") {
    throw new Error("2b Invalid Password")
  } else {
    console.log("2b Login Successful!")
  }
}
try {
  // Pass
  login2b("sam", "123abc")
  // Username Error
  // login2b("am", "13abc")
  // Password Error
  // login2b("sam", "1abc")
}
catch (error) {
  console.log(error)
}
