const eqArrays = require('./eqArrays');
const eqObjects = function(object1, object2) {
  let result = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    let object1Keys = Object.keys(object1);
    //console.log(object1Keys);
    for (let keys of object1Keys) {
      //console.log(keys);
      // console.log(typeof(object2[keys]));
      if (typeof(object1[keys]) === typeof(object2[keys])) {
        if (Array.isArray(object2[keys])) {
              
          //  console.log("here");
          result = (eqArrays(object1[keys],object2[keys]));
          //console.log(result);
          //return result;
          if (!result) {
            break;
          }
        } else if (typeof(object1[keys]) === "number" && typeof(object2[keys]) === "number") {
          //console.log((object1['a']));
          result = true;
        } else if (typeof(object1[keys]) === "object" && typeof(object2[keys]) === "object") {
          // console.log("line 37");
          result = eqObjects(object1[keys],object2[keys]);   //if result is false stops evaluate
          if (!result) {
            break;
          }
          //  result = false;
          //   break;
        }
      }  else {
        //console.log("wrong");
        result = false;
        return result;
            
      }
    }
  }
  return result;
};

module.exports = eqObjects;