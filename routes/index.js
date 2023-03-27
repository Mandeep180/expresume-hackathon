var express = require('express');
var app = express();
var router = express.Router();
var port = 3000;

let indexController = require("../controllers/index");

app.set('view engine', 'ejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('home');
  res.render('home', { title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  console.log('home');
  res.render('home', { title: 'Home' });
});

/* GET contactUs page */
router.get('/contact', function(req, res, next) {
  console.log('contact');
  res.render('contact', { title: 'Contact' });
});
/* GET personalInfo page */
router.get('/journal', function(req, res, next) {
  console.log('journallllll');
  res.render('journal', { title: 'Journal' });
});
/* GET personalInfo page */
router.get('/personalinfo', function(req, res, next) {
  console.log("personalinfooooooooooooooo");
  res.render('personalinfo', { title: 'personalinfo' });
});
/* GET resume page */
router.get('/resume', function(req, res, next) {
  console.log("resummmmeeee");
  res.render('resume', { title: 'resume' });
});
/* GET resume page */
router.get('/kanban', function(req, res, next) {
  console.log("kanban");
  res.render('kanban', { title: 'kanban' });
});


/* GET Route for displaying the Login page */
router.get("/login", indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get("/logout", indexController.performLogout);



module.exports = router;
