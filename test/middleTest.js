const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle",() =>{
  it(`return [3] for [1,2,3,4,5]`,() => {
    const input =[1,2,3,4,5];
    const output =[3];
    assert.deepEqual(middle(input),output);
  });
  it(`return [] for [1]`,() => {
    const input =[1];
    const output =[];
    assert.deepEqual(middle(input),output);
  });
  it(`return [] for [1,2]`,() => {
    const input =[1,2];
    const output =[];
    assert.deepEqual(middle(input),output);
  });
  it(`return [2,3] for [1,2,3,4]`,() => {
    const input =[1,2,3,4];
    const output =[2,3];
    assert.deepEqual(middle(input),output);
  });
  it(`return [3,4] for [1,2,3,4,5,6]`,() => {
    const input =[1,2,3,4,5,6];
    const output =[3,4];
    assert.deepEqual(middle(input),output);
  });
});