var express = require('express');
const { getAllProduct, getProductById } = require('../controllers/productController');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllProduct);
router.get("/:id",getProductById)

module.exports = router;
