var express = require('express');
const { getAllProduct } = require('../controllers/productController');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllProduct);

module.exports = router;
