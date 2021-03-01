const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = " ") {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.arr[position] === undefined) {
      this.arr.length = 0;
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let massiv = this.arr.join("~~");
    this.arr.length = 0;
    return massiv;
  },
};

module.exports = chainMaker;
