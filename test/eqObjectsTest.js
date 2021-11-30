const assert = require('chai').assert;
const _ = require('../index');

describe("#Check Equality of two Objects",() =>{

  it(`returns true if compare  to { a: { z: 1 }, b: 2 } to { a: { z: 1 }, b: 2 }`,() => {
    const input = { a: { z: 1 }, b: 2 } ;
    const input2 = { a: { z: 1 }, b: 2 };
    assert.isTrue(_.eqObjects(input,input2));
  });
  it(`returns true if compare { a: {z:{z: 1 }}, b: 2 } to { a: { z:{z: 1} }, b: 2 } `,() => {
    const input ={ a: {z:{z: 1 }}, b: 2 };
    const input2 ={ a: { z:{z: 1} }, b: 2 } ;
    assert.isTrue(_.eqObjects(input,input2));
  });
  it(`returns false if compare { a: { y: 0, z: 1 }, b: 2 } to { a: 1, b: 2 } `,() => {
    const input ={ a: { y: 0, z: 1 }, b: 2 };
    const input2 ={ a: 1, b: 2 };
    assert.isFalse(_.eqObjects(input,input2));
  });
  it(`returns false if compare { a: [1], b: 2 } to { a: {a:1}, b: 2 } `,() => {
    const input ={ a: [1], b: 2 };
    const input2 ={ a: {a:1}, b: 2 };
    assert.isFalse(_.eqObjects(input,input2));
  });
  
});
