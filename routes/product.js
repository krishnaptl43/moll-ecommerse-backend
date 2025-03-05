var express = require('express');
const { getAllProduct, addProduct, editProduct, deleteProduct } = require('../controllers/productController');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllProduct);
router.post('/add', addProduct);
router.put('/edit/:id', editProduct);
router.delete("/delete/:id", deleteProduct)

module.exports = router;
