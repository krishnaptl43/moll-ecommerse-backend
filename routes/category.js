var express = require('express');
const { getAllCategories} = require('../controllers/categoryController');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllCategories);

module.exports = router;
