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
assertArrayEqual([1,2,3,4,5],[1,2,4,5]);