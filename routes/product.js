var express = require('express');
const { getAllProduct, addProduct, editProduct, deleteProduct } = require('../controllers/productController');
const upload = require('../config/multer');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllProduct);
router.post('/add',upload.single("thumbnail"), addProduct);
router.put('/edit/:id', editProduct);
router.delete("/delete/:id", deleteProduct)

module.exports = router;
