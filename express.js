const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query.name)
  res.send('Hello World!')
})
// app.get('/about', (req, res) => {
//   res.send('about')
// })
// sendFile will go here
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
app.get('/map', (req, res) => {

  res.send('map')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})