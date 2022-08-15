export default class Pant {
  constructor(
    color,
    legs,
    fabric
  ){
    this.color = color
    this.legs = legs
    this.fabric = fabric
    this.price = "$5"
    this.isRipped = true
  }
  ripped(isRipped){
    this.isRipped = isRipped
  }
}
  
