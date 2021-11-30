
const _ = require('../index');
const assert = require('chai').assert;

describe("#Flatten Array ",() =>{
  it("should return [1,2,3,1,2,1,2,3,78,89] if passesd [1,2,3,[1,[2]],[1,2,3],78,89]" ,() =>{
    assert.deepEqual(_.flatten([1,2,3,[1,[2]],[1,2,3],78,89]),[1,2,3,1,2,1,2,3,78,89]);
  });
  it("should return [1,2,3,4,5,6] if passesd [1,2,3,[4,5,6]  ",()=>{
    assert.deepEqual(_.flatten([1,2,3,[4,5,6]]),[1,2,3,4,5,6]);
  });
 
});
