var express = require('express');
const { getAllProduct } = require('../controllers/productController');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllProduct);
// router.post('/add', addCategory);
// router.post('/edit/:id', editCategory);
// router.delete("/delete/:id", deleteCategory)

module.exports = router;
