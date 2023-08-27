const functions = require("firebase-functions");
const express = require("express");
const bodyParser = require("body-parser");
const viewEngine = require("./config/viewEngine");
const initWebRoutes = require("./routes/web");

const app = express();

viewEngine(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
initWebRoutes(app);

// Update the following line to use the proper environment variable
const port = process.env.PORT || 5000;

exports.app = functions.https.onRequest(app);

// Remove the following part since it's not needed in Cloud Functions
app.listen(port, () => {
  console.log("app is running on port:" + port);
});
