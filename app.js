const express = require('express')
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const { generatorPwd } = require('./public/javascripts/generator')
const app = express()
const port = 3000

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/submit', (req, res) => {
  const options = req.body
  const pwd = generatorPwd(options)
  res.render('index', { pwd })
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
