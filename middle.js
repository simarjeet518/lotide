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
