const datas = require("../models/data");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllData = asyncWrapper(async (req, res) => {
  const data = await datas.find({});
  res.status(200).json({ data });
});

const createData = asyncWrapper(async (req, res) => {
  const data = await datas.create(req.body);
  res.status(201).json({ data });
});



module.exports = {
  getAllData,
  createData,
};
