 
const eqArrays = function(arr1 , arr2) {
  let result = true;
  let lengthOfArray = arr1.length;   // if there is diferrence in lengths of 2 arrays arrays not equals
  if (arr1.length === arr2.length) {
    for (let i = 0; i < lengthOfArray; i++) {
      if (!(arr1[i] === arr2[i])) {
        result = false;
      }
    }
  } else {
    result = false;
  }
  return result;
};
const assertArrayEqual = function(arr1 ,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log("Array 1 = " + arr1 + "     Arrray 2= " + arr2  + "      Arrays Matched!!");
  } else {
    console.log("Array 1 = " + arr1 + "     Arrray 2= " + arr2  + "        Arrays do not matched");
  }
};

const takeUntil = function(array ,callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      break;
    }
    result.push(array[i]);
  }
    
  return result;
};
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
assertArrayEqual((takeUntil([1,2,3,-1,6,7], x => x < 0)),[1,2,3]);
assertArrayEqual((takeUntil(data2, x => x === ',')),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);