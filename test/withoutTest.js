const _ = require('../index');
const assert = require('chai').assert;

describe("#Without",() =>{
  it("should return [2] if passed [1,2,3] and [1,3,4]" ,() =>{
    assert.deepEqual(_.without([1,2,3],[1,3,4]),[2]);
  });
  it(`should return ["1","2",4,5,6] if passed ["1","2","3",4,5,6] and [1,2,"3"]` ,() =>{
    assert.deepEqual(_.without(["1","2","3",4,5,6] , [1,2,"3"]),["1","2",4,5,6]);
  });
  it(`should return ["hello", "world"] if passed ["hello", "world", "lighthouse"] and ["lighthouse"]` ,() =>{
    assert.deepEqual(_.without(["hello", "world", "lighthouse"],["lighthouse"]),["hello", "world"]);
  });
 
});