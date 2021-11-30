const findKeyByValue = function(givenObj , givenValue) {
  let result;
  for (let keys in givenObj) {
    if (givenObj[keys] === givenValue) {
      result = keys;
      break;
    }
  }
  return result;
};

module.exports = findKeyByValue;


