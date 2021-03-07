const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const newString = str === null ? 'null' : str
  const primaryArr = new Array(options.repeatTimes || 1)
  const middleArr = new Array(options.additionRepeatTimes || 1)
  const middle = middleArr.fill(options.addition === null ? 'null' : options.addition).join(options.additionSeparator || '|')

  return primaryArr.fill(newString + middle).join(options.separator || '+')
};
  