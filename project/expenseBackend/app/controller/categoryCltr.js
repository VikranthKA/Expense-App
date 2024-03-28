const Category = require("../model/categoryModel")

const categoryCltr = {}

categoryCltr.create = async (req, res) => {
    try {
        const { category } = req.body
        const newCategory = new Category({ category })
        newCategory.userId = req.user.id
        await newCategory.save()
        res.json(newCategory)
    } catch (err) {
        res.json(err) 
    }
}

categoryCltr.list = async (req, res) => {
    try {
        const categories = await Category.find({userId:req.user.id})
        res.json(categories)
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}