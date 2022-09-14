const Categories = require("../models/categoryModel")



const categoryCtrl = {
    getCategories : async (req, res) => {
        const categories = await Categories.findOne({id: req.user._id})
        if(!categories) return res.json({msg: "No categories found"})

        res.json(categories)
    }
}