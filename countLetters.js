const countLetters = function(sentence) {
  sentence = sentence.toLowerCase();
  let returnObj = new Object();
  for (let letter of sentence) {
    if (letter !== ' ') {
      returnObj[letter] = 0;
    }
  }
  for (let keys in returnObj) {
    for (let letter of sentence) {
      if (keys === letter) {
        returnObj[keys]++;
      }
    }
  }
 
  return returnObj;
};
module.exports = countLetters;
