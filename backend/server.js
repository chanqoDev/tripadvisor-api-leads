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

// Create restaurants table if it doesn't exist
const createTableQuery = `
CREATE TABLE IF NOT EXISTS restaurants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  restaurantsId VARCHAR(255) UNIQUE,  -- Add UNIQUE constraint
  name VARCHAR(255),
  currentOpenStatusText VARCHAR(255),
  parentGeoName VARCHAR(255),
  locationId INT,
  phone VARCHAR(255),
  location VARCHAR(255),
  geo INT,
  geoid VARCHAR(255),
  contactAddress VARCHAR(255)
)`;

db.query(createTableQuery, (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Table created");
  }
});

app.post("/restaurants", (req, res) => {
  const restaurantData = req.body;

  // Extract the necessary data from restaurantData
  const {
    restaurantsId,
    name,
    currentOpenStatusText,
    parentGeoName,
    locationId,
    phone,
    location,
    geo,
    geoid,
    contactAddress,
  } = restaurantData;

  // Create the SQL query to insert the data into the database
  const insertQuery = `
    INSERT INTO restaurants (restaurantsId, name, currentOpenStatusText, parentGeoName, locationId, phone, location, geo, geoid, contactAddress)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  // Execute the SQL query with the extracted data
  db.query(
    insertQuery,
    [
      restaurantsId,
      name,
      currentOpenStatusText,
      parentGeoName,
      locationId,
      phone,
      location,
      geo,
      geoid,
      contactAddress,
    ],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error saving data to the database");
      } else {
        console.log("Data saved to the database");
        res.status(200).send("Data saved to the database");
      }
    }
  );
});
