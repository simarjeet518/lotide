const assert = require('chai').assert;
const _ = require('../index');

describe("#find key in an Object",() =>{
 
  it(`result should equal to Noma `,() => {
    assert.strictEqual(_.findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2),"noma");
  });
  it(`result should equal to allen`,() => {
    const example = {
      SImar : { city :"vancouver"},
      Allen : { city :"surrey"},
      Asley :{  city :"Burnaby"}

    };
    assert.strictEqual((_.findKey(example, x => x.city === "surrey")),"Allen");
  });
  
   
});