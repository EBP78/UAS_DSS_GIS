const users = require("../models/user");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const findUser = asyncWrapper(async (req, res, next) => {
  const { name: userNM, pss: pass } = req.params;
  const user = await users.findOne({ username: userNM, password: pass });
  if (user === null) {
    return res.status(200).json({ success: false });
  }
  res.status(200).json({ success: true });
});

module.exports = {
  findUser,
};
