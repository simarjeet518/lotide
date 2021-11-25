
const eqArrays = function(arr1 , arr2) {
  let result = true;
  let lengthOfArray = arr1.length;   // if there is diferrence in lengths of 2 arrays arrays not equals
  if(arr1.length === arr2.length){
  for (let i = 0; i < lengthOfArray; i++) {
    if (!(arr1[i] === arr2[i])) {
      result = false;
    }
  }
} else {
  result=false;
}
  return result;
};
const assertArrayEqual = function(arr1 ,arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log( "Array 1 = "+ arr1 +"     Arrray 2= " + arr2  +"      Arrays Matched!!");
  } else {
    console.log("Array 1 = "+ arr1 +"     Arrray 2= " + arr2  +"        Arrays do not matched");
  }
};
assertArrayEqual([1,2,3,4,5],[1,2,4,5]);