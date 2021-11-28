const assertEqual = function(actual, expected) {
  let msg;
  if (actual === expected) {
    msg = `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};
const countOnly = function(allItems, itemsToCount) {
  const returnObj = new Object();
  for (let item in itemsToCount){    // keep aonly keys with true value
    if(itemsToCount[item]){
      returnObj[item]=0 ;
    }
  };
  for(let keys in returnObj){
  for (let i=0;i<allItems.length;i++) {     //count keys in array
    if (keys === allItems[i]){
      returnObj[keys]++;
    }
  }
}
for (let keys in returnObj){     // delete keys which has zero value
  if(returnObj[keys]=== 0){
    delete returnObj[keys];
  }
}

  
  
  return returnObj;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

 assertEqual(result1["Jason"], 1);
 assertEqual(result1["Karima"], undefined);
 assertEqual(result1["Fang"], 2);
 assertEqual(result1["Agouhanna"], undefined);