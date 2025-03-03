const ApiResponse = require("../api-response/response")
const productModel = require("../models/productModel")

async function addProduct(req, res) {
    let {  } = req.body
    try {

        let prod = await productModel.create(req.body)
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

async function editProduct(req, res) {
    const { cate_name, slug } = req.body
    const { id } = req.params;
    try {
        let prod = await productModel.findByIdAndUpdate(id, { cate_name, slug })
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


module.exports = { getAllProduct, addProduct, deleteProduct, editProduct }