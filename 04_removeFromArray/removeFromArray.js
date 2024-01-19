// 3 dots with the args paramater is called a rest operator
// tells JS to gather remaining parameters into an array with that name
const removeFromArray = function (array, ...args) {
  // define new array
  const newArray = [];
  // use a forEach loop to go through the array
  array.forEach((item) => {
    // push elements into new array
    // unless they're included in the function arguments
    // as those should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // return the new array
  return newArray;

  // a somewhat simpler but more complicated way to do it
  //   return array.filter((val) => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
