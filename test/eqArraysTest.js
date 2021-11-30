const assert = require('chai').assert;
const _ = require('../index');

describe("#Check Equality of two Arrays",() =>{
  it(`returns true if compare [1,2,3]  to [1,2,3]`,() => {
    const input =[1,2,3];
    const input2 =[1,2,3];
    assert.isTrue(_.eqArrays(input,input2));
  });
  it(`returns false if compare [1,2,3,"4"]  to [1,2,3,4]`,() => {
    const input =[1,2,3,"4"];
    const input2 =[1,2,3,4]
    assert.isFalse(_.eqArrays(input,input2));
  });
  it(`returns false if compare ["1", "2", "3",[1,2]]  to ["1", "2", "3",1,[2]] `,() => {
    const input =["1", "2", "3",[1,2]] ;
    const input2 =["1", "2", "3",1,[2]];
    assert.isFalse(_.eqArrays(input,input2));
  });
  it(`returns false if compare [[[1],[[2],3]]]  to [[1,2,3]] `,() => {
    const input =[[1,2,3]] ;
    const input2 =[[[1],[[2],3]]];
    assert.isFalse(_.eqArrays(input,input2));
  });
  
});
