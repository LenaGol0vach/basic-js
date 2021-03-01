const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  if (!date.getTime()) throw new Error();
  let month = date.getMonth();
  if (month == 11 || month == 0 || month == 1) {
    return "winter";
  } else if (month < 5) {
    return "spring";
  } else if (month < 8) {
    return "summer";
  } else return "autumn";
};
