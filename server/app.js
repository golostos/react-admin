const express = require('express')
const app = express()

app.get('/api/hello', (req, res) => {
  res.send('hello world')
})

app.listen(4000)