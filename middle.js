
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

module.exports = middle;
