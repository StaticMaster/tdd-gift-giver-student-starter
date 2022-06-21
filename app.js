const express = require("express");
const morgan = require("morgan");
const app = express();
const giftExchangeRouter = require("./routes/gift-exchange");
const port = 3001;

morgan("tiny");
var bodyParser = require("body-parser");

app.use("/gift-exchange", giftExchangeRouter);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json({ ping: "pong" });
});

// app.get("/models/gift-exchange.js", (error, req, res, next)=>
// {
//     if (a<0) {
//     result = "500"
// else if ()

//     }
// }


// )

module.exports = app;
