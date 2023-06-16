const http = require("http");
const express = require("express");
const app = express();
// const mysql = require("mysql");
const mysql = require("mysql2");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const config = require("./config");
const PORT = 3001;

app.get("/test", (req, res) => {
  res.send("new update ");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// Create connection : add the configuration object and setup config's
const db = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.database,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql Connected..");
});

// Create table
// app.get("/createpoststable", (req, res) => {
//   let sql =
//     "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Post Table created...");
//   });
// });
