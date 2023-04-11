var express = require("express");

var app = express();
const port = 3000;
app.listen(port, () => {
    console.log("Listening on port " + port);
});

app.get("/", (req, res) => {
    res.send('Hello World!');
});