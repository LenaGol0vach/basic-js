const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) options.separator = "+";
  if (
    options.additionRepeatTimes === undefined &&
    options.repeatTimes === undefined
  ) {
    (options.additionRepeatTimes = 1), (options.repeatTimes = 1);
  }
  let additionArr = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    additionArr.push(String(options.addition));
  }
  let x = String(str) + additionArr.join(String(options.additionSeparator));
  let arr = [];
  for (let j = 0; j < options.repeatTimes; j++) {
    arr.push(x);
  }
  return arr.join(String(options.separator));
};
