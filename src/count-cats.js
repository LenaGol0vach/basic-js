const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr.push(matrix[i][j]);
    }
  }
  for (let item of arr) {
    if (item == "^^") sum++;
  }
  return sum;
};
