const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const http = require("http");
const app = express();
app.use(cors());
const config = require("./config");

app.use(bodyParser.json());
const PORT = 3001;

app.get("/test", (req, res) => {
  res.send("new update ");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// testing App config
console.log("Database host:", config.db.host);
