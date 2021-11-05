// 1. Turn an array of numbers into a total of all the numbers
function total(arr) {
  return arr.reduce(function (final, num) {
    final += num
    return final
  })
}
// Arrow Function 
total = (arr) => arr.reduce((final, num) => {
  final += num
  return final
})
// Test
console.log(total([1, 2, 3])); // 6

// 2. Turn an array of numbers into a long string of all those numbers
function stringConcat(arr) {
  return arr.reduce(function (final, str) {
    final += str.toString()
    return final
  })
}
// Arrow Function 
stringConcat = arr => arr.reduce((final, str) => {
  final += str.toString()
  return final
})
// Test
console.log(stringConcat([1, 2, 3])); // "123"

// 3. Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
  return arr.reduce(function (final, voter) {
    if (voter.voted) {
      final++
    }
    return final
  }, 0)
}
// Arrow Function 
totalVotes = arr => arr.reduce((final, voter) => {
  if (voter.voted) {
    final++
  }
  return final
}, 0)
// Array
var voters = [
  { name: 'Bob', age: 30, voted: true }, { name: 'Jake', age: 32, voted: true }, { name: 'Kate', age: 25, voted: false }, { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true }, { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true }, { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false }, { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true }, { name: 'Zack', age: 19, voted: false }
]; console.log(totalVotes(voters)); // 7
// Another Way 
let votes = 0
voters.forEach(function (voter) {
  if (voter.voted === true) {
    votes++
  }
})
console.log(votes)

// 4.  Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
  return arr.reduce(function (final, cost) {
    final += cost.price
    return final
  }, 0)
}
// Arrow Function 
shoppingSpree = arr => {
  return arr.reduce((final, cost) => {
    final += cost.price
    return final
  }, 0)
}
// Array
var wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];
// Test
console.log(shoppingSpree(wishlist)); // 227005

// 5.  Given an array of arrays, flatten them into a single array
function flatten(arr) {
  return arr.reduce(function (final, item) {
    return final.concat(item)
  })
}
// Arrow Function 
flatten = arr => arr.reduce((final, item) => final.concat(item))
// Array 
var arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
];
// Test
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// 6. Given an array of potential voters, return an object representing the results of the vote
// Array 
var voters = [
  { name: 'Bob', age: 30, voted: true }, { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false }, { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true }, { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true }, { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false }, { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true }, { name: 'Zack', age: 19, voted: false }
];
// Arrow Function & Answer
voterResults = arr => {
  return arr.reduce(function (final, voter) {
    if (voter.age <= 25) {
      final.numYoungPeople++
    } if (voter.age <= 25 && voter.voted) {
      final.numYoungVotes++
    } if (voter.age > 26 && voter.age <= 35) {
      final.numMidsPeople++
    } if (voter.age > 26 && voter.age <= 35 && voter.voted) {
      final.numMidVotesPeople++
    } if (voter.age > 36) {
      final.numOldsPeople++
    } if (voter.age > 36 && voter.voted) {
      final.numOldVotesPeople
    }
    return final
  }, {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0
  })
}
// Test 
console.log(voterResults(voters));