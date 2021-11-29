const assertEqual = require('./assertEqual');

const tail = function(arr) {
  arr.shift();
  return arr;
  
};
assertEqual(tail([1,2,3,4]).length,3);
assertEqual(tail([]).length,0);
