var controller = require('./controller');

var router = require('express').Router();


router.get('/', function (req, res) {
  controller.getHome(req, res);
});

router.get('/about', function (req, res) {
  controller.getAbout(req, res);
});

router.get('*', function (req, res) {
  controller.get404(req, res);
});

module.exports = router;
