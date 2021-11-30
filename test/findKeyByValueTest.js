const assert = require('chai').assert;
const _ = require('../index');

describe("#find key in an Object by value",() =>{
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    series: "The Wire",
    drama:  "The Wire",
    
  };
  it(`should return undefined`,() => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it(`Should return series`,() => {
    assert.strictEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "series");
  });
  
   
});