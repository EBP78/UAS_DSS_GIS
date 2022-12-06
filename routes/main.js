const express = require("express");
const router = express.Router();

const { getAllData, createData, deleteData } = require("../controllers/main");

router.route("/").get(getAllData).post(createData);

router.route("/:id").delete(deleteData);

module.exports = router;
