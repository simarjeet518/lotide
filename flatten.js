const flatten = function(arr) {
  let flattenArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
     
      flattenArray = flattenArray.concat(flatten(arr[i]));
      
    
    
    } else {
      flattenArray.push(arr[i]);
    }
  }
  return flattenArray;
};

module.exports = flatten;