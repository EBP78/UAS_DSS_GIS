const express = require("express");
const router = express.Router();

const { getAllData, createData } = require("../controllers/main");

router.route("/").get(getAllData).post(createData);

router.route("/:id").get().patch();

module.exports = router;
