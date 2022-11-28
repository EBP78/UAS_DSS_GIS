const linearAlgebra = require("linear-algebra")(),
  Vector = linearAlgebra.Vector,
  Matrix = linearAlgebra.Matrix;
const datas = require("../models/data");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");
const topsis = require("topsis");

const calculateTopsis = (data) => {
  let m = new Matrix(data);
  let ia = ["max", "max", "min", "max", "min"];
  let w = [0.25, 0.1, 0.2, 0.15, 0.25];

  let output = topsis.getResList(m, w, ia);

  // console.log(`${output} is the best, which is item number : ${index}`);
  // return { success: true, best: output, index: index, data: data };
  return output;
};

const getResult = asyncWrapper(async (req, res) => {
  // await db
  const data = await datas.find({});
  // data into array
  let topsisData = [];
  for (let i = 0; i < data.length; i++) {
    topsisData.push(data[i].penilaian);
  }
  // calculateTopsis
  let output = calculateTopsis(topsisData);
  // map jadi dapet datanya lagi (nama alternatif)
  // return result
  res.status(200).json(output);
});

module.exports = { getResult };
