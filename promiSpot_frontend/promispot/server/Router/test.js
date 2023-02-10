const express = require('express')
const router = express.Router()
const cheerio = require('cheerio')
const axios = require('axios')
const url = 'https://place.map.kakao.com/m/314463146'

router.get("/", (req, res) => {
  console.log(req)
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Accept, Content-Type, Authorization, X-Requested-With");
  res.send({ cat : 2 });
});

module.exports = router