const assertArrayEqual = require('../assertArrayEqual');
assertArrayEqual([1,2,3,4,5],[1,2,3,4,5]);
assertArrayEqual([1,2,3,[4,[5]]],[1,2,3,[4,[5]]]);