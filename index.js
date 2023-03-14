const express = require("express")
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send("GET Request Called")
})

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})