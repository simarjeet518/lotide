const letterPositions = function(sentence) {
  sentence = sentence.toLowerCase();
  let returnObj = new Object();
  
  for (let letter of sentence) {
    if (letter !== ' ') {
      returnObj[letter] = [];
    }
  }
  
  //let pos=[];
  for (let keys in returnObj) {
    
    for (let i = 0; i < sentence.length; i++) {
      if (keys === sentence[i]) {
        //pos = arrayOfkeyValue.push(i);
        //returnObj[keys] = pos;
        returnObj[keys].push(i);
      }
    }
  }
  return returnObj;
};

module.exports = letterPositions;