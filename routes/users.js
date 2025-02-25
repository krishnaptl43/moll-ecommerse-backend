var express = require('express');
const { addUser, userLogin } = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/adduser', addUser);
router.post('/login-user', userLogin);

module.exports = router;
