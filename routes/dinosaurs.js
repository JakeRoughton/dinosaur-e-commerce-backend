const express = require("express");
const router = express.Router();
const { getAllToys } = require("../Controllers/toysController")

//GET all toys from database
router.get("/all",getAllToys)

module.exports = router;