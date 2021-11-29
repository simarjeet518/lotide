const assertEqual = require('./assertEqual');
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

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "series");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);