const assertEqual = function(actual, expected) {
  let msg;
  if (actual === expected) {
    msg = `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};
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
const eqObjects = function(object1, object2) {
   let result;
   if(Object.keys(object1).length === Object.keys(object2).length){
        let object1Keys = Object.keys(object1);
        //console.log(object1Keys);
        for(let keys of object1Keys){
          //console.log(keys);
          if(typeof(object1[keys] === typeof(object2[keys]))){
             if(Array.isArray(object2[keys])){
             // console.log("here");
              result = (eqArrays(object1[keys],object2[keys]));
              if(!result){
                break;
              }
            } else if(object1[keys] === object2[keys]){
             // console.log(typeof(object1[keys]));
              result =true;
            } else {  
              //console.log("line 37");
              result = false;
              break;
            }
          }  else {
            //console.log("wrong");
            result = false;
            break;
          }
        }
   }
   return result;
};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),true); 
assertEqual(eqObjects(cd, dc),true); 
assertEqual(eqObjects(dc, cd2),true); 
