const assertArrayEqual = require('../assertArrayEqual');
const middle = require('../middle');
assertArrayEqual(middle([1,2,3,4,5]),[3]);
assertArrayEqual(middle([1]),[]);
assertArrayEqual(middle([1,2]),[]);
assertArrayEqual(middle([1,2,3,4]),[2,3]);
assertArrayEqual(middle([1,2,3,4,5,6]),[3,4]);
assertArrayEqual(middle([1,2,3,4,5,6,7]),[4]);