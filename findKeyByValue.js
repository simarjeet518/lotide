const assertEqual = function(actual, expected) {
  let msg;
  if (actual === expected) {
    msg = `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};

const findKeyByValue = function(givenObj , givenValue) {
  let result;
  for (let keys in givenObj) {
    if (givenObj[keys] === givenValue) {
      result = keys;
      break;
    }
  }
  return result;
};
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  series: "The Wire",
  drama:  "The Wire",
  
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);