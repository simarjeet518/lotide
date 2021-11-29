const assertArrayEqual = require('./assertArrayEqual');
const middle = function(inputArray) {
  let middleArray = [];
  let midPos = parseInt(inputArray.length / 2);
  if (inputArray.length === 1 || inputArray.length === 2) {
    
    middleArray = [];
  } else if (inputArray.length % 2 === 0) {
    middleArray.push(inputArray[midPos - 1]);
    middleArray.push(inputArray[midPos]);
       
  } else {
    middleArray.push(inputArray[midPos]);
  }
  return middleArray;
};

assertArrayEqual(middle([1,2,3,4,5]),[3]);
assertArrayEqual(middle([1]),[]);
assertArrayEqual(middle([1,2]),[]);
assertArrayEqual(middle([1,2,3,4]),[2,3]);
assertArrayEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArrayEqual(middle([1,2,3,4,5,6,7]),[4]);
