
const takeUntil = function(array ,callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      break;
    }
    result.push(array[i]);
  }
    
  return result;
};
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// assertArrayEqual((takeUntil([1,2,3,-1,6,7], x => x < 0)),[1,2,3]);
// assertArrayEqual((takeUntil(data2, x => x === ',')),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
module.exports = takeUntil;