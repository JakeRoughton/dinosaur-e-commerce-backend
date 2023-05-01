const mongoose = require("mongoose");

const toySchema = new mongoose.Schema({
	Name: { type: String, require: true, unique: true },
	Type: { type: String, require: true },
    id: {type: String, require: true},
	Image: { type: Image},
});

const toy = mongoose.model("toy", toySchema);

module.exports = toy;