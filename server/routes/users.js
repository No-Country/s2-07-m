var express = require('express');
const { detail } = require('../controllers/userController');
var router = express.Router();
const userController = require('../controllers/userController')
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', detail);

module.exports = router;
