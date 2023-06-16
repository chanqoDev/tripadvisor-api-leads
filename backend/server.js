const http = require("http");
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors"); // require coors
app.use(cors()); // declare use of the cors in the app
app.use(express.json()); // convert our express data to json inorder to parse it

const config = require("./config");

const PORT = 3001;

app.get("/test", (req, res) => {
  res.send("new update ");
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

// Create connection
// add the configuration object and setup config's

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

// create the Database
// app.get("/createdb", (req, res) => {
//   let sql = "CREATE DATABASE";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Database created");
//   });
// });

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

// insert post 1
// app.get("/addpost1", (req, res) => {
//   let post = { title: "Post One", body: "this is post number one" };
//   let sql = "INSERT INTO posts SET ?";
//   let query = db.query(sql, post, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Post 1 added...");
//   });
// });

// select single posts
// app.get("/getposts/:id", (req, res) => {
//   let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Posts fetched...");
//   });
// });

// update post
// app.get("/updatepost/:id", (req, res) => {
//   let newTitle = "Update Title";
//   let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Post updated..");
//   });
// });

// Delete Post
// app.get("/deletepost/:id", (req, res) => {
//   let newTitle = "Update Title";
//   let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Post updated..");
//   });
// });

// Get endpoint: read a value
app.get("/users", (req, res) => {
  res.status(200).send([
    { name: "jhon", id: 1 },
    { name: "dough", id: 2 },
  ]);
});

// POST endpoint: Create a value
// app.post("/user/3", (req, res) => {
//   const { name } = req.body;
//   if (!name) {
//     res.status(400).send({ message: "Please enter the name of the user" });
//   }
//   res.send({ name: name, id: 3 });
// });

// PUT endpoint: update a value
// DELETE: delete a value
