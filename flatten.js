const assertArrayEqual = require('./assertArrayEqual');
const flatten = function(arr) {
  let flattenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
     
     flattenArray=flattenArray.concat(flatten(arr[i]));
      //flatten[arr[i]];
    
    
    } else {
      flattenArray.push(arr[i]);
    }
  }
  return flattenArray;
};
console.log(flatten([1,2,3,[1,[2]],[1,2,3],78,89]));