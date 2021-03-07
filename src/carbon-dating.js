const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; // N0
const HALF_LIFE_PERIOD = 5730; // t 1/2

module.exports = function dateSample(str) { // N
  if (typeof str !== 'string') {
    return false
  }

  let number = parseFloat(str)
  
  if (isNaN(number) || number <= 0 || number > MODERN_ACTIVITY) {
    return false
  }

  const k = 0.693 / HALF_LIFE_PERIOD
  const t = Math.log(MODERN_ACTIVITY / number  ) / k

  return Math.ceil(t)
};
