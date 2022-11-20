const express = require("express");
const router = express.Router();

const { calculateTopsis } = require("../controllers/topsis");

router.route("/").get(calculateTopsis);

module.exports = router;
