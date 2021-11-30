
const _ = require('../index');
const assert = require('chai').assert;

describe("#head",() =>{
  it("return 5 for [5,6,7,8]" ,() =>{
    assert.strictEqual(_.head([5,6,7,8]),5);
  });
  it("return '5' for ['5',6,7,8]" ,() =>{
    assert.strictEqual(_.head(['5',6,7,8]),'5');
  });
  it(`return "Hello" for ["Hello", "Lighthouse", "Labs"]` ,() =>{
    assert.strictEqual(_.head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});