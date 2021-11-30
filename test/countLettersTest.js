const assert = require('chai').assert;
const _ = require('../index');

describe("#Count numbers of letters in a string",() =>{
  it(`returns 2 as number of occurances of i in a string "lighthouse in the house"`,() => {
    const input ="lighthouse in the house";
    assert.strictEqual((_.countLetters(input)).i,2);
  });
    it(`returns 4 as number of occurances of h in a string "lighthouse in the house"`,() => {
      const input ="lighthouse in the house";
      assert.strictEqual((_.countLetters(input)).h,4);
    });
});