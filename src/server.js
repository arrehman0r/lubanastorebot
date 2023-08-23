const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const initWebRoutes = require("./routes/web"); // Update with the correct path
const viewEngine = require("./config/viewEngine"); // Update with the correct path

const app = express();

viewEngine(app); // Set up your view engine

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use initWebRoutes to set up your routes
initWebRoutes(app);

// Export the Cloud Function
exports.app = functions.https.onRequest(app);
