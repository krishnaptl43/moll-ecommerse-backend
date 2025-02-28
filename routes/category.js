var express = require('express');
const { getAllCategories, addCategory, editCategory, deleteCategory } = require('../controllers/categoryController');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllCategories);
router.post('/add', addCategory);
router.post('/edit/:id', editCategory);
router.delete("/delete/:id", deleteCategory)

module.exports = router;
