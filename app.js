const linearAlgebra = require("linear-algebra")(),
  Vector = linearAlgebra.Vector,
  Matrix = linearAlgebra.Matrix;

const topsis = require("topsis");

let m = new Matrix([
  [2, 5, 5],
  [60, 26, 4],
  [20, 20, 4],
  [500, 2, 4],
  [50, 23, 3],
  [25, 10, 1],
]);
let ia = ["min", "min", "max"];
let w = [0.27, 0.33, 0.4];

let res = topsis.getBest(m, w, ia);

console.log(res);
