const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const userSchema = new mongoose.Schema({
	email: { type: String, require: true, lowercase: true, unique: true },
	hashedPassword: { type: String, require: true },
    userName: {type: String, require: true},
	id: { type: String, default: uuid },
});

const User = mongoose.model("user", userSchema);

module.exports = User;