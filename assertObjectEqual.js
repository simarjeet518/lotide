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
