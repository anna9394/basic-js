const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = 2 ** disksNumber - 1;
  const sec =  turnsSpeed / 60 / 60;
  const seconds =  Math.floor(turns / sec)

  return {turns, seconds}
};
