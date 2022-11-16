const express = require("express");
const app = express(); // create express app
const path = require("path");

/*
app.get("/", (req, res) => {
  res.send("This is from express.js");
});
*/

/*
app.get("/", (req, res) => {
 res.sendFile(path.join(__dirname, "public", "index.html"));
});
*/

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
//to fix routes
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


// start express server on port 9001
app.listen(9001, () => {
  console.log("server started on port 9001");
});