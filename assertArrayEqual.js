
const eqArrays = require('./eqArrays');
const assertArrayEqual = function(arr1 ,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log("✅✅✅  Arrays Matched!!");
  } else {
    console.log("🛑🛑🛑  Arrays do not matched");
  }
};
// assertArrayEqual([1,2,3,4,5],[1,2,4,5]);
// assertArrayEqual([1,2,3,[4,[5]]],[[[1,2,3,4,5]]]);
module.exports = assertArrayEqual;