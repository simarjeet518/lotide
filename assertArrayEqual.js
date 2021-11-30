
const eqArrays = require('./eqArrays');
const assertArrayEqual = function(arr1 ,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log("✅✅✅  Arrays Matched!!");
  } else {
    console.log("🛑🛑🛑  Arrays do not matched");
  }
};

module.exports = assertArrayEqual;