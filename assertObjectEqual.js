const eqObjects = require('./eqObjects');
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  let msg = "";
  if (eqObjects(object1,object2)) {
    msg = `✅  Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`;
  } else {
    msg = `🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  }
  return msg;
};
module.exports = assertObjectsEqual;
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(assertObjectsEqual(cd,dc));
// console.log(assertObjectsEqual(cd,cd2));
// console.log(assertObjectsEqual(dc,cd2));
