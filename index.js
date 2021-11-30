const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertArrayEqual = require('./assertArrayEqual');
const assertEqual = require('./assertEqual');
const assertObjectEqual = require('./assertObjectEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten.js');
const letterPositions = require('./letterPositions');
const map = require('./map.js');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map,
  takeUntil: takeUntil,
  without: without,
  assertArrayEqual: assertArrayEqual,
  assertEqual: assertEqual,
  assertObjectEqual: assertObjectEqual
};