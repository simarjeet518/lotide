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
    console.log("Arrays Matched!!");
  } else {
    console.log("Arrays do not matched");
  }
};
const flatten = function(nestedArray) {
  let flattenArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      for (let j = 0; j < nestedArray[i].length; j++) {
        flattenArray.push(nestedArray[i][j]);
      }
    } else {
      flattenArray.push(nestedArray[i]);
    }
  }
  return flattenArray;
};
console.log(flatten([1,2,3,[1,2],[1,2,3],78,89]));