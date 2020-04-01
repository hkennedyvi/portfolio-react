const express = require("express");
// const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
var index = require('./routes/index');
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

// app.use('/', index);
app.use(routes);


app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);
});
