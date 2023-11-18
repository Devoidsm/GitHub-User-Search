const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
//Api information
const axios = require('axios').default;
axios.defaults.baseURL = 'https://api.github.com';

app.use(express.static('build'))
//Listening
app.listen(PORT, () =>{console.log('Server listening on https://localhost:8080')});

//should take user to the Main page
app.get("/", (req, res) => {
  res.send("You have navigated to the Main");
});
