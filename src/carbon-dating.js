const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    sampleActivity == 0 ||
    isNaN(+sampleActivity) ||
    typeof sampleActivity != "string"
  ) {
    return false;
  }

  let k = 0.693 / HALF_LIFE_PERIOD;
  let ln = Math.log(MODERN_ACTIVITY / sampleActivity);
  let result = Math.ceil(ln / k);
  return result > 0 ? result : false;
};
