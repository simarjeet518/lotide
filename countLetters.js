const assertEqual = function(actual, expected) {
  let msg;
  if (actual === expected) {
    msg = `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};
const countLetters = function(sentence){
  sentence = sentence.toLowerCase();
  let returnObj = new Object();
  for (let letter of sentence){
    if (letter !== ' '){
     returnObj[letter]=0;
    }
  }
  for(let keys in returnObj){
    for(let letter of sentence){
      if(keys === letter) {
        returnObj[keys]++;
      }
    }
  }
 
  return returnObj;
};
console.log(countLetters('lighthouse in the house'));