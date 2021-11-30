const assertEqual = function(actual, expected) {
  let msg;
  if (actual === expected) {
    msg = `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};
module.exports = assertEqual;

