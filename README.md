# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kaursimarjeet/lotide`

**Require it:**

`const _ = require('@kaursimarjeet/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(Array)`: takes array as an argument and return first element of an array.
* `tail(Array)`: takes an array as an argument return new array excludes first element from original array,but does'nt alter original array.
* `without(Array1 , Array2)`: takes two array as an arguments and returns first array excludes simmilar elements present in second array.
* `middle(Array)`: takes array as an argument ,return middle elements os an array.
* `takeUntil(Array,callback)`: returns an array excludes elements specified in condition in callback function.
* `map([array])`: returns an array of first letters from array of Strings.
* `letterPositions(strings)`: return an object where keys are the letters of Strings(sentence) passed and values are the position of the each letter in a String.
* `flatten(array)`: returns a flattern array from nested arrays.
* `findKeyByValue(object , value)`: finds a key in a object for a given value.
* `findKey(Object,callback)`: find a key in an Object based on condition specified in callback function.
* `eqObjects(Obj1,Obj2)`:check the equality of two Objects.
* `eqArrays(Arr1,Arr2)`:check the equality of two Arrays.
* `countOnly(Array,Objects)`: Count occurance of keys in a given array has value  true.
* `countLetters(String)`: Return an object where keys are theletters of the strings and values are the total count of letters in given String.
* `assertEqual(),assertArrayEqual(),assertObjectEqual()`:check primitives values,arrays and objects.Functionality is simmilar to assert function.

