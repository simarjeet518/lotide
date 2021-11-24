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
const middle = function(inputArray){
   let middleArray=[];
   let midPos =parseInt(inputArray.length/2);
   if(inputArray.length === 1 || inputArray.length === 2){
     middleArray = [];
   } else if(inputArray.length % 2 ===0){
      middleArray.push(inputArray[midPos -1]);
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
