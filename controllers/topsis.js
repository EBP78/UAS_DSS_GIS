const linearAlgebra = require("linear-algebra")(),
  Vector = linearAlgebra.Vector,
  Matrix = linearAlgebra.Matrix;

const topsis = require("topsis");

let data = [
  [1, 0.8, 0.4],
  [1, 0.2, 0.2],
  [0.75, 0.2, 0.9],
];

let m = new Matrix(data);
let ia = ["min", "min", "max"];
let w = [0.15, 0.2, 0.2];

let res = topsis.getBest(m, w, ia);
let index = data.indexOf(res);

console.log(`${res} is the best, which is item number : ${index}`);
