const assertEqual = function(actual, expected) {
  let msg;
  if (actual === expected) {
    msg = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🔴 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};

const tail = function(arr) {
  arr.shift();
  return arr;
  
};
assertEqual(tail([1,2,3,4]).length,3);
assertEqual(tail([]).length,1);
