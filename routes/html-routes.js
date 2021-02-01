var path = require("path");
// var router = express.Router()

module.exports = function (app) {
  app.get('/',  (req, res) => {
    res.render('index')
  })

  app.get('/about',  (req, res) => {
    res.render('about')
  })

  app.get('/projects',  (req, res) => {
    res.render('projects')
  })

  app.get('/contact',  (req, res) => {
    res.render('contact')
  })
  
}