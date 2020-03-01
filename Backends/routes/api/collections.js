const express = require("express");
const router = express.Router();

// @route GET api/collections/test
// @desc Test collections route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Collection Works" }));

module.exports = router;
