const countOnly = function(allItems, itemsToCount) {
  const returnObj = new Object();
  for (let item in itemsToCount) {    // keep aonly keys with true value
    if (itemsToCount[item]) {
      returnObj[item] = 0;
    }
  }
  for (let keys in returnObj) {
    for (let i = 0; i < allItems.length; i++) {     //count keys in array
      if (keys === allItems[i]) {
        returnObj[keys]++;
      }
    }
  }
  for (let keys in returnObj) {     // delete keys which has zero value
    if (returnObj[keys] === 0) {
      delete returnObj[keys];
    }
  }

  
  
  return returnObj;
};
module.exports = countOnly;
