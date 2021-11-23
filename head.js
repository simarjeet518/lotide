const assertEqual = function(actual, expected) {
  let msg;
  if (actual === expected) {
    msg = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🔴 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};

const head = function(arr) {
   return arr[0];
  
};
assertEqual(head([5,6,7]),5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");