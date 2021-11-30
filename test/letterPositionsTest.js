const _ = require('../index');
const assert = require('chai').assert;

describe("#TakeUntil ",() =>{
  it(`should return [1] as a position of letter e in hello` ,() =>{
    assert.deepEqual((_.letterPositions("hello").e), [1]);
  });
  it(`should return [2,3] as aposition of letter l in hello` ,() =>{
    assert.deepEqual((_.letterPositions("hello").l), [2,3]);
  });

});
