const _ = require('../index');
const assert = require('chai').assert;

describe("#TakeUntil ",() =>{
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
  it(`should return [ 'I\'ve', 'been', 'to', 'Hollywood' ]` ,() =>{
    assert.deepEqual((_.takeUntil(data2, x => x === ',')),[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
  it("should return [1,2,3] if passesd [1,2,3,-1,6,7], x => x < 0) ",()=>{
    assert.deepEqual((_.takeUntil([1,2,3,-1,6,7], x => x < 0)),[1,2,3]);
  });
 
});