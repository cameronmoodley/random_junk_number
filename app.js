// create an express app
const express = require("express");
const app = express();

// use the express-static middleware
app.use(express.static("public"));

// define the first route
app.get("/", function (req, res) {
  let array = Array.from({ length: 100 }, (v, k) => k * 1);
  var shuffled = array.sort(function () {
    return 0.5 - Math.random();
  });

  let selected = shuffled.slice(0, 10);

  res.json({ numberData: selected });
});

// start the server listening for requests
app.listen(process.env.PORT || 3200, () => console.log("Server is running..."));
