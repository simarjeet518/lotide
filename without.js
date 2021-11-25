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


const without = function(arr1,unwantedArrItems) {
  let FilteredArray = [];
  for (let i = 0; i < arr1.length; i++) {
    FilteredArray.push(arr1[i]);
  }
 
  for (let j = 0; j < unwantedArrItems.length; j++) {
    for (let i = 0; i < FilteredArray.length; i++) {
      if (FilteredArray[i] === unwantedArrItems[j]) {
        
        FilteredArray.splice(i,1);
         
      }
    }
  }

  return FilteredArray;
};
console.log(without([1, 2, 3], [1, 3, 4])); // => [2, 3]
console.log(without(["1", "2", "3",4,5,6], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(words);
assertArrayEqual(words, ["hello", "world", "lighthouse"]);