const Toy = require("../models/Toy");

async function getAllToys(req,res, next){
    try{
        const allToys = await Toy.find({});
        console.log(allToys)
        res.json({ success: true, Toys: allToys});
    } catch(error){
        res.json({ success: false, message: error});
    }
}

module.exports = {
    getAllToys
}