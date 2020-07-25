/*
REQUIREMENTS:
Create a function called countLetters.

The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

Before implementing this function, we need to think about how it will report back these counts. 
It's not that we want to know how many H's are in this sentence?, because that would just be a number. 
We need it report back multiple numbers.

*/


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `\u274C\u274C\u274C Assertion Failed: ${actual} === ${expected}`;
  }
};

function countLetters (sentence) {

  // get length of string
  return sentence.length;
}

console.log(countLetters('LHL'));

