const assertArrayEqual = require('./assertArrayEqual');
//assertArrayEqual([1,2,3,4,5],[1,2,4,5]);
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
console.log(letterPositions("lighthouse in the house"));
//letterPositions("hello");
assertArrayEqual(letterPositions("hello").e, [1]);
assertArrayEqual(letterPositions("hello").l, [2,3]);