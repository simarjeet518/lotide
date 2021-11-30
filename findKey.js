
const findKey = function(object,callback) {
  let result;
  const key = Object.keys(object);
  for (let i = 0; i < key.length; i++) {
    if (callback(object[key[i]])) {
      result = key[i];
      break;
    }
  }
  return result;
};

module.exports = findKey;