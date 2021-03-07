const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  return array.flat().reduce((acc, el) => el === "^^" ? acc + 1 : acc, 0)
};
