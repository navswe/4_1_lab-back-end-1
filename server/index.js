// make sure to install nodemon globally in the command line with this command: npm install -g nodemon

const express = require("express"); //import express package
const cors = require("cors"); //import cors package, which allows the client and sever to communicate with each other without the need for advanced configurations
const app = express(); // create a variable 'app' to reuse later and initialize express commands
app.use(express.json()); // configure express server to use JSON objects
app.use(cors()); // this allows the express server to use cors package

//create GET endpoint and method to handle sending a friends array back to the client (front end)
app.get("/api/users", (req, res) => {
  let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
  res.status(200).send(friends);
});

//create another GET endpoint and method to tell the weather today
app.get("/weather/:temperature", (req, res) => {
  const { temperature } = req.params;
  const phrase = `<h3>It was ${temperature} today</h3>`;
  res.status(200).send(phrase);
});

app.listen(4000, () => console.log("Server running on port 4000")); // set the express server to listen to requests on port 4000. Use nodemon server/index.js in the command line to get the new server listening to port 4000
