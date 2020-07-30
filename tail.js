const assertEqual = require('./assertEqual');

/* const assertEqual = function(actual, expected) {
  if (actual === undefined || expected === undefined) {
    return;
  } else if (actual === expected) {
    return `\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`;
  }
}; */

const tail = function(array){
  array.shift();
  return array;
}

module.exports = tail;