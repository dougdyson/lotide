/*
REQUIREMENTS:
A function eqArrays which takes in two arrays and returns true or false, 
based on a perfect match.

TESTS:
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

*/
const assertEqual = function(actual, expected) {
  
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;  
    }
  }

  return true;
}

const eqArrays = function (array1, array2) {
  
  // This is a super simple check as the requirement was for a perfect match
  // need to improve this code to check types, numbers, booleans, objects, etc

  if (array1.length !== array2.length){
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
}

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false