const express = require('express')
require('dotenv').config()

const app = express()
const PORT = 3000

app.use(express.json())

app.use(require('./routes/weatherRoutes'))

app.listen(PORT, () =>{
  console.log(`app is running on port ${PORT}`)
})