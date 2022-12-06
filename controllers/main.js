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

const deleteData = asyncWrapper(async (req, res, next) => {
  const { id: dataID } = req.params;
  const data = await datas.findOneAndDelete({ _id: dataID });
  if (!data) {
    return next(createCustomError(`no data with id ${dataID}`, 404));
  }
  res.status(200).json(data);
});

module.exports = {
  getAllData,
  createData,
  deleteData,
};
