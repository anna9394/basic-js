const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let max = 1;
    let current = 1;

    if (Array.isArray(arr)) {
      for (let elem of arr) {
        if (Array.isArray(elem)) {
          current += this.calculateDepth(elem);
        }
        if (current > max) {
          max = current;
        }
        current = 1;
      }
    }

    return max;
  }
};