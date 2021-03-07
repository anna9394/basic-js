const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  return Array.isArray(array) ? array.filter(el=> typeof(el) === 'string').map(el => el.trim()[0].toUpperCase()).sort().join("") : false
};
