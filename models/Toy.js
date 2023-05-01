const mongoose = require("mongoose");

const toySchema = new mongoose.Schema({
	Name: {type: String, require: true, unique: true },
	Type: {type: String, require: true},
	Price: {type: String, require: true},
    id: {type: String, require: true},
	Image: {type: String, require:true},
});

const Toy = mongoose.model("Toy", toySchema);

module.exports = Toy;