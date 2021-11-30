const _ = require('../index');
const assert = require('chai').assert;
const mapfunction = word => word[0];
const words = ["ground", "control", "to", "major", "tom"];
describe("#Map ",() =>{
  it("should return ['g','c','t','m','t']" ,() =>{
    assert.deepEqual(_.map(words,mapfunction),['g','c','t','m','t']);
  });
 
 
});