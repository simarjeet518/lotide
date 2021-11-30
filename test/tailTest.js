const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail",() =>{
  it("return [6,7,8] for [5,6,7,8]" ,() =>{
    assert.deepEqual(tail([5,6,7,8]),[6,7,8]);
  });
  it(`return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]` ,() =>{
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("return 5  as length of  Arr=[5,6,7,8,9] even after using tail function on same Array  " ,() =>{
    const arr =[5,6,7,8,9];
    tail(arr);
    assert.strictEqual(arr.length,5);
  });

});