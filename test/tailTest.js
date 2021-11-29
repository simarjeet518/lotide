const assertEqual = require('../assertEqual');
const assertArrayEqual = require ('../assertArrayEqual')
const tail = require('../tail')
const arr =[1,2,3,4,5,6]
assertArrayEqual(tail(arr),[2,3,4,5,6]);
assertEqual(arr.length,6);    // to check tail does'nt alter orginal array
