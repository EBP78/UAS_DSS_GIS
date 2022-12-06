const express = require("express");
const router = express.Router();

const { findUser } = require("../controllers/user");

router.route("/:name/:pss").get(findUser);

module.exports = router;
