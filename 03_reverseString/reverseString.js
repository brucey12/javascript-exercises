const reverseString = function (str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  return string;
};

// Do not edit below this line
module.exports = reverseString;
