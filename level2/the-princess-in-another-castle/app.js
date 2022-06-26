class Player {
  constructor(name, totalCoins, status, hasStar) {
    this.name = name
    this.totalCoins = totalCoins
    this.status = status
    this.hasStar = hasStar
    //marioGame added as array tester
    this.marioGame = ["MarioLand", "LuigiWorld"]
    this.setName()
    this.namePicked = this.name
    this.gameActive = true;
    this.print()
  } // End Initial

  setName() {
    if (this.namePicked !== "Mario" || this.namePicked !== "Luigi") {
      let randomNumber = Math.floor(Math.random() * 2)
      if (randomNumber === 0) {
        console.log("🟥 Mario Selected")
        this.marioGame = this.marioGame[0]
        this.name = "Mario"
      } else if (randomNumber === 1) {
        console.log("🟩 Luigi Selected")
        this.marioGame = this.marioGame[1]
        this.name = "Luigi"
      }
    }
  } // End SetName()

  gotHit() {
    // const {status} = this;
    if (this.status === "Powered Up" && this.hasStar === true) {
      this.hasStar = false
      console.log(`✨ Star Protected ${this.name} From Hit`)
    } else if (this.status === "Powered Up") {
      this.status = "Big"
    } else if (this.status === "Big") {
      this.status = "Small"
    } else if (this.status === "Small") {
      this.status = "Dead"
      this.gameActive = false
    }
  } // End gotHit()

  gotPowerup() {
    if (this.status === "Powered Up" && this.hasStar === true) {
      console.log(`🌟 Already Star Protected`)
    } else if (this.status === "Powered Up") {
      this.hasStar = true
      console.log(`⭐️ Congrats! ${this.name} Recieved A Star`)
    } else if (this.status === "Big") {
      this.status = "Powered Up"
    } else if (this.status === "Small") {
      this.status = "Big"
    }
  } // End Powerup()

  addCoin() {
    this.totalCoins++
  } // End addCoin()

  print() {
    console.log(`
  Name: ${this.name}
  Status: ${this.status}
  Coins: ${this.totalCoins}
  Mario Game: ${this.marioGame}`)
  } // End Print()

} // Closes player class

// Create Player (runs first)
const player = new Player("", 0, "Big", false)

// Chooses Random Hit(), Power Up(), or Coin()
roll = () => {
  let randomNumber = Math.floor(Math.random() * 3)
  if (randomNumber === 0) {
    console.log(`💥 ${player.name} Got Hit!`)
    player.gotHit()
  } else if (randomNumber === 1) {
    console.log(`🍄 ${player.name} Got Powered Up!`)
    player.gotPowerup()
  } else if (randomNumber === 2) {
    console.log(`🟡 Coin Added!`)
    player.addCoin()
  }
  // Prints Player Info After Each Roll()
  player.print()
  // Ends Game 
  if (player.gameActive === false) {
    clearInterval(intervalID)
    console.log(`☠️  ${player.name} Has Died`)
  }
}

// Rolls Action Chance Every Second
const intervalID = setInterval(function () {
  console.log("----------------------") // Breaks Lines
  roll()
}, 1000)

