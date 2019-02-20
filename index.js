var http = require('http')
require('dotenv').config()
let express = require('express')
let app = express()

app.use(express.static('public'))

app.set('port', process.env.PORT || 3000)
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  if (process.env.GITHUB_ACTOR && process.env.GITHUB_SHA) {
    res.render('index', {sha: process.env.GITHUB_SHA.substring(process.env.GITHUB_SHA, 6), name: process.env.GITHUB_ACTOR})
  } else {
    res.render('almost')
  }
})

let port = process.env.PORT || 3000;

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})

module.exports = app
