/*-------------------- Location -------------------
cd
cd Desktop/VSchool/Assignments/Level1/colossal-adventure-rpg
node app.js
*/

// Emoji List ๐งโค๏ธโค๏ธโ๐ฉน๐๐ฒ๐ฆค๐กโฐ๐ฆ๐๐๐๐๐ฐโฐ๏ธโ ๏ธ๐ชฆ๐ฎ๐๐๐ฏ๐ค๐ฅ๐จ๐ฆ

// ----------------SANDBOX----------------------------------------------
// Default Entry
// lang = readline.question('Which language? ', {defaultInput: 'javascript'});

// boolYes = readline.keyInYN("Yeas or No")
// console.log(boolYes) // Returns true or false only t or f

// key = readline.keyIn()
// console.log(key) // Takes key and returns key

// ONLY ACCEPT KEY "w" with enter
// walk = readline.question('Walk [w] ', {limit: "w"});

// ONLY ACCEPT KEY No Enter "w" or "p" (no enter, none-case sensetive) 
// pressedKey = readline.keyIn('Walk [w] or [p] ', {limit: ["w", "p"]})

// Change limit message
// file = readline.question('Name of Text File: ', {
//   limit: /change$/i,
//   limitMessage: 'Sorry, $<lastInput> is not text file.'
// });

// Choices with QUIT instead of CANCEL
// moves = ['Attack', 'Sneak Away']
// index = readline.keyInSelect(frameworks, 'What's your move?', {cancel: 'Quit'});
// console.log(moves[index]);

// 50%
// Math.random(>=.5)
//

const readline = require("readline-sync");

const player = {
  name: (null),
  hearts: ["โค๏ธ "],
  inventory: ["EMPTY"],
  health: 10,
  level: 0
};

const beast = {
  kind: ["๐ฆค ", "๐ฆ", "๐"],
  hearts: ["๐ค", "โค๏ธโ๐ฉน", "๐", "โ ๏ธ "],
  health: 10
}

// Starting Beast Placeholder
currentBeast = beast.kind[0]

// Spacing Functions
function space() {
  console.log("************************************")
  console.log("")
}

function spaceBlank() {
  console.log("")
}

function spaceWin() {
  console.log("โจ โญ๏ธ ๐ซ ๐ โจ โญ๏ธ ๐ซ ๐ โจ โญ๏ธ ๐ซ ๐ โจ โญ๏ธ ๐ซ ๐")
}

// START
function gameStart() {
  let name = readline.question("๐ง Hello there, I am ZimZam The Mystical. I've been watching you. You seem to be lost... What is your name? ");
  // Makes Player Name Standout
  player.name = name.toUpperCase()
  // Y/N Starts The Game
  boolYes = readline.keyInYN("๐ง Hello " + player.name + ", It seems we both are lost. Please, help me regain my magic and I shall help you find your way... Help Me?")
  if (boolYes === true) {
    walk()
  } else {
    quit()
  }
}
// Runs Game Start
gameStart()

function quit() {
  if (!readline.keyInYN("๐ง Are you sure you want to leave me " + player.name + "?")) {
    // Key that is not `Y` was pressed
    // Allows Fighting To Continue After Level 1 (Otherwise Walk Started)

    if (player.level >= 1) {
      playerStrike()
    }
    else {
      console.log("๐ง I have a little trick to get us out safe ๐จ ...")
      walk()
    }
  } else {
    console.log("๐ง I walk alone again...")
    process.exit();
  }
}

function run() {
  // Run From Fight
  console.log("๐ง We got far enough to walk again...")
  walk()
}

function walk() {
  pressedKey = readline.keyIn("๐ง Shall we continue walking " + player.name + "? : [w]alk / [p]layer ", { limit: ["w", "p"] })
  if (pressedKey === "p") {
    console.log(player)
    return walk()
  } else if (pressedKey === "w") {
    walkPrompt()
  }
}

function walkPrompt() {
  // Allows Random Attack 1/4
  let attackProb = Math.floor((Math.random() * 4) + 1)
  promptProb = Math.floor((Math.random() * 4) + 1)
  // Allows Different Walk Promopt
  while (attackProb <= 3) {
    if (promptProb === 1) {
      pressedKey = readline.keyIn("๐ง Look " + player.name + " more snowy mountains ๐ : [w/p] ", { limit: ["w", "p"] })
    } else if (promptProb === 2) {
      pressedKey = readline.keyIn("๐ง " + player.name + " I swear we passed that tree already ๐ฒ : [w/p] ", { limit: ["w", "p"] })
    } else if (promptProb === 3) {
      pressedKey = readline.keyIn("๐ง " + player.name + " Look! Another  tombstone ๐ชฆ : [w/p] ", { limit: ["w", "p"] })
    } else if (promptProb === 4) {
      pressedKey = readline.keyIn("๐ง Oh Dear! Another Dear ๐ฆ : [w/p] ", { limit: ["w", "p"] })
    }
    if (pressedKey === "p") {
      console.log(player)
      return walk()
    } else if (pressedKey === "w") {
      walkPrompt()
    }
  }
  beastEnter()
}

function beastEnter() {
  // Pobability Of Beast Type
  let beastProb = Math.floor((Math.random() * 10) + 1)
  space()
  if (beastProb <= 3) {
    console.log(beast.kind[0] + " Beast Enters Path: Rabid DoDo")
    spaceBlank()
    return currentBeast = beast.kind[0], firstStrike()
    // Scorpion Most Probable 4/10
  } else if (beastProb > 3 && beastProb < 8) {
    console.log(beast.kind[1] + " Beast Enters Path: Giant Scorpion")
    spaceBlank()
    return currentBeast = beast.kind[1], firstStrike()
  } else if (beastProb >= 8) {
    console.log(beast.kind[2] + " Beast Enters Path: Unholy Dragon")
    spaceBlank()
    return currentBeast = beast.kind[2], firstStrike()
  }
}

function firstStrike() {
  // Sets Health to Max for Both
  player.health = 10;
  beast.health = 10;
  // Both Health Displayed Before Battle
  console.log(beast.hearts[0] + " Beast Health:" + beast.health)
  console.log(player.hearts[0] + " Player Health: " + player.health)
  spaceBlank()
  // 50% Chance First Strike 
  let turn = Math.floor((Math.random() * 2) + 1)
  if (turn <= 1) {
    console.log("๐ง " + player.name + " take the first strike!!!")
    playerStrike()
  } else {
    return beastStrike()
  }
}

function playerStrike() {
  // Move Menu
  let moves = ['Attack', 'Run Away', 'Inventory']
  moves[-1] = "quit"
  let index = readline.keyInSelect(moves, "What's your move?", { cancel: 'Quit' })
  // Player Attacks
  if (moves[index] === "Attack") {
    console.log("๐ฅ " + "You " + moves[index] + "!")
    // Player HP by level (Change Multiplier To Change Difficulty)
    if (player.level === 0) {
      beast.health -= Math.floor((Math.random() * 2) + 1)
    } else if (player.level === 1) {
      beast.health -= Math.floor((Math.random() * 3))
    } else if (player.level === 2) {
      beast.health -= Math.floor((Math.random() * 4))
    } else if (player.level === 3) {
      beast.health -= Math.floor((Math.random() * 4) + 1)
    }
    // Beast Death
    if (beast.health < 1) {
      space();
      beastDie()
    } else
      console.log(beast.hearts[0] + " Beast Health:" + beast.health)
    space();
    beastStrike()
    // Player Runs    
  } else if (moves[index] === "Run Away") {
    console.log("๐จ " + "You " + moves[index] + "!")
    let runProb = Math.floor((Math.random() * 10) + 1)
    if (runProb < 5) {
      space();
      console.log("...Too Slow!")
      return beastStrike()
    }
    else {
      return run()
    }
    // Player Inventory
  } else if (moves[index] === "Inventory") {
    console.log(player)
    return playerStrike()
    // Player Quits
  } else if (moves[index] === "quit") {
    return quit()
  }
}

function beastStrike() {
  // Beast Strike Weaker Than Player (Cahnge player.health multiplier to Increase Difficulty)
  player.health -= Math.floor((Math.random() * 3))
  console.log(currentBeast + " Beast Strikes")
  if (player.health < 1) {
    return playerDie()
  } else {
    console.log(player.hearts[0] + " Player Health: " + player.health)
    return playerStrike()
  }
}

function beastDie() {
  console.log(beast.hearts[3] + " The beast is dead!")
  player.level += 1
  trasure()
}

function trasure() {
  // Inventory Tells Player Level
  console.log("๐ง The beast has dropped an item...")
  if (player.level === 1) {
    player.inventory = ["๐ก "]
    console.log("๐ก  Sword + Inventory")
    spaceBlank()
  } else if (player.level === 2) {
    console.log("๐ Horse + Inventory")
    spaceBlank()
    player.inventory = ["๐ก ", "๐ "]
  } else if (player.level === 3) {
    console.log("๐  Shroom + Inventory")
    spaceBlank()
    player.inventory = ["๐ก ", "๐ ", "๐ "]
  } else if (player.level === 4) {
    console.log("๐ฎ  Crystal + Inventory")
    console.log("๐ฎ  Crystal will help us teleport to the ๐ฐ Castle")
    spaceBlank()
    player.inventory = ["๐ก ", "๐ ", "๐ ", "๐ฎ "]
    return win()
  }
  return walk()
}

function playerDie() {
  console.log("โฐ๏ธ  You have died. All items are lost...")
  spaceBlank()
  console.log("๐ง I walk alone again... " + player.name)
  // Restart
  process.exit();
}

function win() {
  spaceWin()
  spaceBlank()
  console.log("๐ง ๐ฐ ๐ We Made It! Thank You " + player.name + "! ๐ฏ๐ ")
  console.log("๐ง Now " + player.name + "... Let's get you back to 1985...")
  // Restart
  process.exit();
}

