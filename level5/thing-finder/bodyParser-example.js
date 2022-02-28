const express = require("express");
const app = express();

// body-parser helps Express interpret different kinds of Content-Types that come in the body of a request object. So if you ever need to POST or PUT, you'll likely need to use the "body-parser" middleware
const bodyParser = require("body-parser");

// bodyParser.json() parses request bodies with a Content-Type header set to "application/json", meaning it can now read and interpret JSON.
app.use(bodyParser.json());

// bodyParser.urlencoded() parses data that comes in with a Content-Type of application/x-www-form-urlencoded, which is what data comes in as when you use an HTML <form> to submit data. For now, don't worry about the extended option, just plan on always including it here.
app.use(bodyParser.urlencoded({extended: true}));

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Express app is listening on port ${port}`);
});
