var villain = require('./villain');
villain.speak();




//server.js

const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// You can skip a step by requiring the modules inline like so.
// It works to do the require on its own line as well, it's up to you.
app.use("/fruit", require("./routes/fruitRoutes"));
app.use("/vegetable", require("./routes/vegetableRoutes"));

// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});



// vegetableRoutes.js

const express = require("express");
const veggieRouter = express.Router();

veggieRouter.route("/")
    .get((req, res) => {
        res.send("GET on /vegetable endpoint");
    })
    .post((req, res) => {
        res.send("POST on /vegetable endpoint");
    });

veggieRouter.route("/:vegetableId")
    .get((req, res) => {
        res.send(`GET on /vegetable/${req.params.vegetableId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT on /vegetable/${req.params.vegetableId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE on /vegetable/${req.params.vegetableId} endpoint`);
    });

module.exports = veggieRouter;