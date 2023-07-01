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
const bodyParser = require("body-parser");
app.use(bodyParser.json());

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

app.post("/restaurants", (req, res) => {
  const restaurantData = req.body;

  // Assuming the structure of restaurantData matches the TripAdvisor API response
  // Extract the necessary data from restaurantData
  const {
    restaurantsId,
    name,
    currentOpenStatusText,
    parentGeoName,
    locationId,
  } = restaurantData;

  // Create the SQL query to insert the data into the database
  const sql = `INSERT INTO restaurants (restaurantsId, name, currentOpenStatusText, parentGeoName, locationId) VALUES (?, ?, ?, ?, ?)`;

  // Execute the SQL query with the extracted data
  db.query(
    sql,
    [restaurantsId, name, currentOpenStatusText, parentGeoName, locationId],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving data to the database");
        console.log(result);
      } else {
        console.log("Data saved to the database");
        res.status(200).send("Data saved to the database");
        console.log(result);
      }
    }
  );
});
