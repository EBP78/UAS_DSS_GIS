const linearAlgebra = require("linear-algebra")(),
  Vector = linearAlgebra.Vector,
  Matrix = linearAlgebra.Matrix;

const topsis = require("topsis");

const calculateTopsis = (datax) => {
  let data = [
    [1, 0.8, 0.4],
    [1, 0.2, 0.2],
    [0.75, 0.2, 0.9],
  ];

  let m = new Matrix(data);
  let ia = ["min", "min", "max"];
  let w = [0.15, 0.2, 0.2];

  let output = topsis.getBest(m, w, ia);
  let index = data.indexOf(output) + 1;

  console.log(`${output} is the best, which is item number : ${index}`);
  return { success: true, best: output, index: index };
};

const getResult = async (req, res) => {
  // await db
  // data into array
  // calculateTopsis
  // return result
  output = calculateTopsis(11);
  res.status(200).json(output);
};

module.exports = { getResult };
