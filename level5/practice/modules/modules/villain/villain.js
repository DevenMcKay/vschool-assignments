
const joker = {
  name: 'The Joker',
  type: 'evil',
  enemy: 'Batman',
  speak: function () {
    console.log('My name is ' + this.name);
    console.log('I am ' + this.type + ' and my enemy is ' + this.enemy);
  }
 }

module.exports = joker