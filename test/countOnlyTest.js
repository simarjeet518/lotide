const assert = require('chai').assert;
const _ = require('../index');

describe("#Count numbers of same strings in a Array",() =>{
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

  const result1 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

  it(`jason count should equal to 1`,() => {
    assert.strictEqual(result1["Jason"],1);
  });
  it(`Karima count should equal to undefined`,() => {
    assert.strictEqual(result1["karima"],undefined);
  });
  it(`Fang count should equal to 2`,() => {
    assert.strictEqual(result1["Fang"],2);
  });
   
});