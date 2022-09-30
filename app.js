const express = require('express')
const app = express();
const path = require('path')


app.get('/names', (req, res) => {
  // app.use(express.static(path.join(__dirname, '/frontend/build')));
  res.sendFile(path.join(__dirname, './static/build/index.html'))
  res.send("Telmo Sampaio");
})

app.listen(5000, () => {
  console.log("Server is running on port 5000");
})