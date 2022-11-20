const express = require("express");
const router = express.Router();

const { getResult } = require("../controllers/topsis");

router.route("/").get(getResult);

module.exports = router;
