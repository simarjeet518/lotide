 const map = function(array , callback) {
  const results = [];
  array.forEach(item => results.push(callback(item)));
  return results;
};

module.exports = map;