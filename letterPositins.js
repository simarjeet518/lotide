const eqArrays = function(arr1 ,arr2) {
  let result = true;
  let lengthOfArray = arr1.length;
  //console.log(arr2);                             // if there is diferrence in lengths of 2 arrays
  if (arr2.length > lengthOfArray) {
    lengthOfArray = arr2.length;             //  length of large array is used in for LOOP to check equality of an array
  }
  for (let i = 0; i < lengthOfArray; i++) {
    if (!(arr1[i] === arr2[i])) {
      result = false;
    }
  }
  return result;
};

const assertArrayEqual = function(arr1 ,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(arr1 +"==="+ arr2 +"   Arrays Matched!");
  } else {
    console.log(arr1 +"!=="+ arr2 +"   Arrays do not matched");
  }
};
const letterPositions = function(sentence) {
  sentence = sentence.toLowerCase();
  let returnObj = new Object();
  
  for (let letter of sentence){
    if (letter !== ' '){
     returnObj[letter]= [];
    }
  }
  let arrayOfkeyValue = [];
  let pos=[];
  for(let keys in returnObj){
    arrayOfkeyValue =[];
    for(let i=0; i< sentence.length;i++){
      if(keys === sentence[i]) {
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