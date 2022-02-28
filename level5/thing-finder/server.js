const express = require("express")
const app = express()

app.use(express.json())

const inventoryItems = [
  {
    name: "banana",
    type: "food",
    price: 200,
  }, {
    name: "pants",
    type: "clothing",
    price: 2500,
  }, {
    name: "basket ball",
    type: "toy",
    price: 1000,
  }, {
    name: "rockem sockem robots",
    type: "toy",
    price: 1500,
  }, {
    name: "shirt",
    type: "clothing",
    price: 800,
  }, {
    name: "soup",
    type: "food",
    price: 300,
  }, {
    name: "flour",
    type: "food",
    price: 100,
  }
]

app
  .get("/", (req, res) => {
    res.send(inventoryItems)
  })
  .get("/toy", (req, res) => {
    const filteredType = inventoryItems.filter(items => items.type === "toy")
    res.send(filteredType)
  })
  .get("/food", (req, res) => {
    const filteredType = inventoryItems.filter(items => items.type === "food")
    res.send(filteredType)
  })
  .get("/clothing", (req, res) => {
    const filteredType = inventoryItems.filter(items => items.type === "clothing")
    res.send(filteredType)
  })
  .get("/name", (req, res) => {
    const name = req.query.name
    const filteredName = inventoryItems.filter(items => items.name === name)
    res.send(filteredName)
  })
  .get("/type", (req, res) => {
    const type = req.query.type
    const filteredType = inventoryItems.filter(items => items.type === type)
    res.send(filteredType)
  })
  .get("/price", (req, res) => {
    const price = req.query.price
    const filteredPrice = inventoryItems.filter(items => items.price === parseInt(price))
    res.send(filteredPrice)
  })
  .get("/range", (req, res) => {
    const min = req.query.min
    const max = req.query.max
    const filteredRange = inventoryItems.filter(items => items.price >= parseInt(min) && items.price <= parseInt(max))
    res.send(filteredRange)
    console.log(req.query)
  })
  
app.listen(3000, () => {
  console.log("Port 3000 Connected")
})