const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boolean) {
    this.reverse = boolean;
  }
  encrypt(message, key) {
    let alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let mes = message.toUpperCase().split("");
    let ke = key.toUpperCase().split("");
    let index = 0;
    let res = mes.map((item) => {
      if (alphabet.includes(item)) {
        let x = alphabet.indexOf(item);
        let y = alphabet.indexOf(ke[index]);
        index++;
        if (index >= ke.length) index = 0;
        console.log(y);
        return alphabet[(x + y) % 26];
      } else {
        return item;
      }
    });
    return this.reverse === false ? res.reverse().join("") : res.join("");
    alert(res);
  }
  decrypt(message, key) {
    let alphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    let mes = message.toUpperCase().split("");
    let ke = key.toUpperCase().split("");
    let index = 0;
    let res = mes.map((item) => {
      if (alphabet.includes(item)) {
        let x = alphabet.indexOf(item);
        let y = alphabet.indexOf(ke[index]);
        index++;
        if (index >= ke.length) index = 0;
        console.log(y);
        return alphabet[(x + 26 - y) % 26];
      } else {
        return item;
      }
    });
    return this.reverse === false ? res.reverse().join("") : res.join("");
  }
}

module.exports = VigenereCipheringMachine;
