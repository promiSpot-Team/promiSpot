const express = require('express')
const test = require('./Router/test')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

app.use("/api", test)
app.use(bodyParser.urlencoded({ extended: false }))
const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));

const port = 5000
app.listen(port, () => console.log(`${port}`))