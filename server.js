/**
 * Where all server related stuff lives
 */

//Dependencies
const express = require("express");
const path = require("path");
const cors = require("cors");

// Custom dependencies
const environnement = require("./config");
const helpers = require("./helper");
//Configuring the server
const app = express();
app.use(express.json({ extended: false }));
app.use(cors);
//connecting to database
helpers.connectDB();

// The api endpoint
const ENDPOINTS = require("./endpoints");
ENDPOINTS.forEach(endpoint => app.use(endpoint, require(`./api/${endpoint}`)));

app.use(express.static("client/build"));
app.get("*", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

//Starting the server
const PORT = process.env.PORT || environnement.PORT;
app.listen(PORT, () =>
  helpers.success(
    `Server in listening in ${environnement.NAME} environment on port ${environnement.PORT}`
  )
);
