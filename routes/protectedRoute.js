var express = require('express');
const { addProduct, editProduct, deleteProduct } = require('../controllers/productController');
const { addCategory, editCategory, deleteCategory } = require('../controllers/categoryController');
const usersRouter = require("./users")
const upload = require('../config/multer');
const { getAllCart, addCart, deleteCart, cartQuantity } = require('../controllers/cartController');
var router = express.Router();

/* GET users listing. */
router.use('/users', usersRouter);

router.post('/categories/add', addCategory);
router.put('/categories/edit/:id', editCategory);
router.delete('/categories/delete/:id', deleteCategory);

router.post('/products/add', upload.single("thumbnail"), addProduct);
router.put('/products/edit/:id', editProduct);
router.delete('/products/delete/:id', deleteProduct);

router.get('/cart', getAllCart);
router.post('/cart/add', addCart);
router.put('/cart/quantity/:cartId/:productId', cartQuantity);
router.delete('/cart/delete/:id', deleteCart);


module.exports = router;
