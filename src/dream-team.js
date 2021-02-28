const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let arr = [];
    members.forEach((element) => {
      if (typeof element == "string") arr.push(element.toUpperCase().trim());
    });
    return arr.sort().reduce((word, item) => word + item[0], "");
  }
  return false;
};
