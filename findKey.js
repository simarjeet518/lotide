const assertEqual = function(actual, expected) {
  let msg;
  if (actual === expected) {
    msg = `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
};

const findKey = function(object,callback) {
  let result;
  const key = Object.keys(object);
  for (let i = 0; i < key.length; i++) {
    if (callback(object[key[i]])) {
      result = key[i];
      break;
    }
  }
  return result;
};
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma");
const example = {
  SImar : { city :"vancouver"},
  Allen : { city :"surrey"},
  Asley :{  city :"Burnaby"}

};
assertEqual((findKey(example, x => x.city === "surrey")),"Allen");