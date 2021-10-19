const readline = require("readline-sync");
console.log(" ");
const nameInput = readline.question("What is your name? ");
const name = nameInput.toUpperCase()

// First Question  
if (readline.keyInYN(`Hello ${name}! Do you want to play a game? `)) {
    console.log(`
  -------------------------------------------
    `);

  if (true) {
    console.log(`Okay ${name}! You agreed, so we shall proceed!!`);
  }
} else {
    console.log(`
  -------------------------------------------
    `);

  readline.question(`"Okay, Have a nice day ${name}"`);
  process.exit();
}

// If Yes, Start the game to choose moves
console.log("  *********** Doors Lock *************");
console.log("Choose your next move:");

choices = ['  Put your hand in the dark hole', '  Open the steel door', '  Lift the bloody floor tile'],
  index = 0;

// Consequences First Round
while (index < 4) {
  index = readline.keyInSelect(choices, "What's your move?"); {
    console.log(`
  -------------------------------------------
    `);

    if (index === 0) {
      console.log("By putting your hand in the hole, you contracted dysentery and die!");
      console.log(`RIP ${name}!`);
      process.exit();

    } else if (index === 1) {
      console.log("The steel door doesn't budge.");

    } else if (index === 2) {
      (index += 3)
      console.log("More blood oozes from the tile, but you find a key!");
    } else if (index === -1) {
      if (readline.keyInYN(`Are you too afraid to continue? `)) {
          console.log(`
  -------------------------------------------
          `);

        if (true) {
          console.log(`Okay ${name}, See you in your dreams!!`);
          process.exit();
        }
      }
    }
  }
}


choices = ['  Put your hand in the dark hole', '   Open the steel door with key', '  Lift the bloody floor tile again'],
  index = 0;

// Consequences Sec Round (After key is found)
while (index < 4) {
  index = readline.keyInSelect(choices, "What's your move?"); {
    console.log(` 
  ------------------------------------------
    `);

    if (index === 0) {
      console.log("By putting your hand in the hole, you contracted dysentery and die!");
      console.log(`RIP ${name}!`);
      process.exit();
      console.log(" ");
      console.log(" ");

    } else if (index === 1) {
      (index += 5)
    } else if (index === 2) {
      console.log("Even more blood oozes from the tile.");
      console.log("Why did you check again?");
    } else if (index === -1) {
      if (readline.keyInYN(`Are you too afraid to continue? `)) {
          console.log(`
  -------------------------------------------
          `);
          
        if (true) {
          console.log(`Okay ${name}, See you in your dreams!!`);
          process.exit();
        }
      }
    }
  }
}

// Victory
console.log("The key fits the steel door");
console.log("   *******  Key Turns  *******");
console.log(`You made it out alive ${name}!...(with dysentery)`)




// else {
  // (readline.keyInYN(`Are you sure you want to quit ${name}?`)) {

  //   if (true) {  
  //     process.exit();
  //   } else{
  //     process();
  //   }

  // }