const router = require('express').Router(); 
const Category = require('../models/Category');

//This is creating Categories
router.post('/', async (req, res) =>{
    const newCategory = new Category(req.body);
    try{
        const savecategory = await newCategory.save();
        res.status(200).send(savecategory);

    }catch(err){
        res.status(500).json(err);
    }
});

router.get('/', async (req, res) =>{
    try{
        const categories = await Category.find();
        res.status(200).send(categories);

    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;