//Dependancies
const express = require("express");
const mongoose = require("mongoose");

//Express setup
const PORT = process.env.PORT || 3000;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/routes")(app);
require("./routes/htmlroutes")(app);

//Connect to Mongo DB
const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/booksearch";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,

});

// Start the server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});