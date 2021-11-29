const assertEqual = require('./assertEqual');

const eqArrays = function(arr1 , arr2) {
  let result = true;
  // let lengthOfArray = arr1.length;   // if there is diferrence in lengths of 2 arrays arrays not equals
  if (arr1.length === arr2.length) {
    
    for (let i = 0; i < arr1.length; i++) {
      if (Array.isArray(arr1[i])) {
      
        if (Array.isArray(arr2[i])) {
      
          result = eqArrays(arr1[i],arr2[i]);
          if (!result) {      //if result is not true return result;
            return result;
          }
        }  else {
          result = false;
          break;
        
        }
      } else  if ((arr1[i] === arr2[i])) {
        result = true;
      
      } else {
        result = false;
        break;
      
      }
    }
  } else {
    result = false;
  }
  return result;
};
module.exports = eqArrays;

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
// assertEqual(eqArrays([1,2,3,"4"], [1,2,3]), false);
// assertEqual(eqArrays([1,2], [1,2,3]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]) ,false);
// assertEqual(eqArrays(["1", "2", "3",[1,2]], ["1", "2", "3",[1,2]]) ,true);
// assertEqual(eqArrays([[[1],[[2],3]]], [[1,2,3]]) ,false);