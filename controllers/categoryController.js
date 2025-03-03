const ApiResponse = require("../api-response/response")
const categoryModel = require("../models/categoryModel")

async function addCategory(req, res) {
    let { cate_name, slug } = req.body
    try {

        let cate = await categoryModel.create({ cate_name, slug })
        if (!cate) {
            return res.json(new ApiResponse(false, null, "category Not added", 400))
        }
        res.json(new ApiResponse(true, cate, "category added Successfully", 200))
    } catch (error) {
        res.json({ status: false, error })
    }
}

async function getAllCategories(req, res) {

    try {
        let cate = await categoryModel.find()
        if (!cate) {
            return res.json(new ApiResponse(false, null, "category Not added", 400))
        }

        res.json(new ApiResponse(true, cate, "category loaded Successfully", 200))
    } catch (error) {
        res.json({ error })
    }
}

async function editCategory(req, res) {
        const {cate_name , slug} = req.body
        const {id} = req.params;
    try {
        let cate = await categoryModel.findByIdAndUpdate(id,{cate_name,slug})
        if (!cate) {
            return res.json({ status: false, data: null, message: "category Not found" })
        }

        res.json({ status: true, data: cate, message: "category upadated Successfully" })
    } catch (error) {
        res.json({ error })
    }
}



async function deleteCategory(req, res) {
    const { id } = req.params;
    try {   
        let cate = await categoryModel.findByIdAndDelete(id)
        if (!cate) {
            return res.json(new ApiResponse(false, null, "category Not found", 400))
        }

        res.json(new ApiResponse(true, cate, "category deleted Successfully", 200));
    } catch (error) {
        res.json({ error })
    }
}


module.exports = { getAllCategories, addCategory, deleteCategory, editCategory }