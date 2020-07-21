const assertEqual = function(actual, expected) {
  if (actual === undefined || expected === undefined) {
    return;
  } else if (actual === expected) {
    return `\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`;
  }
};

const tail = function(array){
  array.shift();
  return array;
}

//TESTS
//console.log(tail([1, 2, 3], [1, 2, 3]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!