const { v4: uuidv4 } = require("uuid")
const bountyData = [
  {
    "First_Name": "Luke",
    "Last_Name": "Skywalker",
    "isDead": false,
    "Bounty_Amount": 77,
    "Type": "Jedi",
    "Img": "https://3.bp.blogspot.com/-4qSSE5jTe8k/Vi_vdaSkQBI/AAAAAAAAAfw/Nv44XlMQZ2U/s1600/Luke%2BSkywalker.jpg",
    _id: uuidv4()
  },
  {
    "First_Name": "Darth",
    "Last_Name": "Vader",
    "isDead": true,
    "Bounty_Amount": 136,
    "Type": "Sith",
    // STATIC ID FOR TESTING
    "Img": "https://gomediamarketing.com/wp-content/uploads/2018/02/darth-vader.jpg",
    _id: "e6c561a0-5e4b-4d7c-8d05-14ea5d9d053e",
  },
  {
    "First_Name": "Obi-Wan",
    "Last_Name": "Kenobi",
    "isDead": false,
    "Bounty_Amount": 182,
    "Type": "Jedi",
    "Img": "https://images.saymedia-content.com/.image/t_share/MTc0NDQ0NzUwMDU1Njc5MzM2/why-obi-wan-was-much-stronger-than-we-thought.jpg",
    _id: uuidv4()
  }
]

module.exports = bountyData