const express = require('express')
const bodyParser = require('body-parser')

/* node 서버 열기 */
const app = express()
app.use(express.json())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({extended : true}));

/* python 연동 설정 */
const { spawn } = require('child_process')

const port = 5000

/* CORS 설정 */
const cors = require('cors')

/* app 설정 */
// app.use(bodyParser.json())
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(cors())

/* get 방식으로 '/' 경로를 사용할 경우 */ 
app.post('/crawling', (req, res) => {
  // res.send('Hello World!')
  const placeUrl = req.body.placeUrl
  const python = spawn('python', ['./crawler.py', placeUrl])
  python.stdout.on('data', (data) => {
    let placeData = JSON.parse(data.toString())
    res.send(placeData)
  })
  
  python.stderr.on('data', function (data) {
    console.error(data.toString());
  });
})

/* post 방식으로 '/api' 경로를 사용할 경우 */ 
app.post('/api', (req, res) => {
  let name = req.body.placeUrl
    console.log(name)
})

/* 서버 시작 */
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})