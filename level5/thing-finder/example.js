
const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("This line is called for every single request into this server, no matter to which endpoint");
    next();
});

app.use("/", (req, res, next) => {
    console.log("This also gets called on every request. There's no reason to specify a mount path of '/' in a .use() block, just omit it entirely.");
    next();
});

app.use("/hot-cross-buns", (req, res, next) => {
    console.log("This will only get called to a request to /hot-cross-buns. The other middleware with no mount path and '/' mount path will also run, since they run on every request");
    next();
});

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
});
