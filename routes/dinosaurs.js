const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();

//instantiate mongodb
const { db } = require("../mongo");

//GET all toys from database
router.get("/all", async function (req, res) {
  const blogs = await db()
    .collection("toys")
    .find({})
    .limit(10)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("error fetching blogs");
      } else {
        res.json(result);
      }
    });
  res.json({
    success: true,
    blogs: blogs,
  });
});

//GET one toy from database
router.get("/get-one", async function (req, res) {
  const blogs = await db()
    .collection("toys")
    .find({})
    .limit(1)
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("error fetching blogs");
      } else {
        res.json(result);
      }
    });

  res.json({
    success: true,
    blogs: blogs,
  });
});

module.exports = router;