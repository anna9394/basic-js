const CustomError = require("../extensions/custom-error");

const chainMaker = {

   arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(el) {
    const newElement = `( ${el} )`;
    this.arr.push(newElement);

    return this;
  },

  removeLink(position) {
    if (!position || position > this.arr.length) {
      this.arr = [];

      throw new Error("Wrong position");
    }
    this.arr.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.arr.reverse();

    return this;
  },

  finishChain() {
    const string = this.arr.join("~~");
    this.arr = [];

    return string;
  }
};

module.exports = chainMaker;
