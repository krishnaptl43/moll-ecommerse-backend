const ApiResponse = require("../api-response/response")
const productModel = require("../models/productModel")
require('dotenv').config()

async function addProduct(req, res) {
    let file = req.file
    let url = `${req.protocol}://${req.hostname}:${process.env.PORT}`

    try {

        let prod = await productModel.create({ ...req.body, supplier: req.data.name, thumbnail: `${url}/uploads/products/${file.filename}` })
        if (!prod) {
            return res.json(new ApiResponse(false, null, "Product Not added", 400))
        }
        res.json(new ApiResponse(true, prod, "Product added Successfully", 200))
    } catch (error) {
        res.json({ status: false, error })
    }
}

async function getAllProduct(req, res) {

    try {
        let prod = await productModel.find()
        if (!prod) {
            return res.json(new ApiResponse(false, null, "Product Not added", 400))
        }

        res.json(new ApiResponse(true, prod, "Product loaded Successfully", 200))
    } catch (error) {
        res.json({ error })
    }
}

async function getProductById(req, res) {
     const {id} = req.params
    try {
        let prod = await productModel.findById(id)
        if (!prod) {
            return res.json(new ApiResponse(false, null, "Product Not added", 400))
        }

        res.json(new ApiResponse(true, prod, "Product loaded Successfully", 200))
    } catch (error) {
        res.json({ error })
    }
}

async function editProduct(req, res) {
    const { prod_name, price } = req.body
    const { id } = req.params;
    try {
        let prod = await productModel.findByIdAndUpdate(id, { prod_name, price }, { new: true })
        if (!prod) {
            return res.json({ status: false, data: null, message: "Product Not found" })
        }

        res.json({ status: true, data: prod, message: "Product upadated Successfully" })
    } catch (error) {
        res.json({ error })
    }
}

async function deleteProduct(req, res) {
    const { id } = req.params;
    try {
        let prod = await productModel.findByIdAndDelete(id)
        if (!prod) {
            return res.json(new ApiResponse(false, null, "Product Not found", 400))
        }

        res.json(new ApiResponse(true, prod, "Product deleted Successfully", 200));
    } catch (error) {
        res.json({ error })
    }
}


module.exports = { getAllProduct, addProduct, deleteProduct, editProduct,getProductById }