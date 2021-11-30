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

module.exports = without;