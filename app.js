require('dotenv').config()
var express = require('express')
var app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  if (process.env.GITHUB_ACTOR && process.env.GITHUB_SHA) {
    res.render('index', {sha: process.env.GITHUB_SHA.substring(process.env.GITHUB_SHA, 6), name: process.env.GITHUB_ACTOR})
  } else {
    res.render('almost')
  }
})

app.listen(3000)
