const ApiResponse = require("../api-response/response")
const cartModel = require("../models/cartModel");
const productModel = require("../models/productModel");

async function addCart(req, res) {
    let { product } = req.body
    let { _id } = req.data
    
    try {
        let productExist = await productModel.findById(product)

        if (!productExist) {
            return res.json(new ApiResponse(false, null, "Product Not found", 400))
        }

        if (!productExist.stock) {
            return res.json(new ApiResponse(false, null, "Product is Out Of Stock", 400))
        }

        let cartExist = await cartModel.findOne({ product, user: _id }).populate('product').populate('user');

        if (cartExist) {
            let quantity = cartExist.quantity + 1
            let total_price = quantity * productExist.price
            let cart = await cartModel.findByIdAndUpdate(cartExist._id, { quantity, total_price }).populate('product').populate('user');
            return res.json(new ApiResponse(true, cart, "Product added to cart Successfully", 200))
        }

        let cart = await (await cartModel.create({ product, user: _id, total_price: productExist.price })).populate('product').populate('user');

        if (!cate) {
            return res.json(new ApiResponse(false, null, "category Not added", 400))
        }

        return res.json(new ApiResponse(true, cart, "added to Cart Successfully", 200))
    } catch (error) {
        res.json({ status: false, error })
    }
}

async function getAllCart(req, res) {
    let { _id } = req.data
    try {
        let cart = await cartModel.find({ user: _id, isBuy: false, isDelivered: false }).populate('product').populate('user');

        if (!cart) {
            return res.json(new ApiResponse(false, null, "Empty Cart", 400))
        }

        res.json(new ApiResponse(true, cart, "Cart loaded Successfully", 200))
    } catch (error) {
        res.json({ error })
    }
}

async function editCategory(req, res) {
    const { cate_name, slug } = req.body
    const { id } = req.params;
    try {
        let cate = await cartModel.findByIdAndUpdate(id, { cate_name, slug })
        if (!cate) {
            return res.json({ status: false, data: null, message: "category Not found" })
        }

        res.json({ status: true, data: cate, message: "category upadated Successfully" })
    } catch (error) {
        res.json({ error })
    }
}



async function deleteCart(req, res) {
    const { id } = req.params;
    try {
        let cate = await cartModel.findByIdAndDelete(id)
        if (!cate) {
            return res.json(new ApiResponse(false, null, "cart Not found", 400))
        }

        res.json(new ApiResponse(true, cate, "Cart item Remove Successfully", 200));
    } catch (error) {
        res.json({ error })
    }
}


module.exports = { getAllCart, addCart, deleteCart,
    //  incrementCart,
    //   decrementCart 
    }