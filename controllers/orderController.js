const ApiResponse = require("../api-response/response");
const orderModel = require("../models/orderModel");


async function createOrder(req, res) {
    const data = req.body
    try {
        let order = await orderModel.create({ ...data, user: req.data._id })
        if (!order) {
            return res.json(new ApiResponse(false, null, "Order Failed"))
        }
        order = await orderModel.findById(order._id).populate('products.product')
        return res.json(new ApiResponse(true, order, "Order Success"))
    } catch (error) {
        return res.json(new ApiResponse(false, error, "Order Failed"))
    }
}

module.exports = {
    createOrder
}