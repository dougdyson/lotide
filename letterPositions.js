/*
REQUIREMENTS
For each letter, instead of returning just one number to represent its number of occurrences, 
multiple numbers may be needed to represent all the places in the string that it shows up.
*/

// 3 MENTOR QUESTIONS

// MENTOR QUESTION 3: I am not using these assertEqual function but am supposed to be.
// Can we walkthrough implementing this approach?
const assertEqualArrays = function(array1, array2) {
  
  if (array1.length !== array2.length) {
    return false;
  }

  // return any mismatch between 2 arrays as false
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return `\u274C\u274C\u274C Assertion Failed: ${actual} !== ${expected}`;
  }
};

const letterPositions = function(sentence) {
  const results = {};
  let indices = [];
  let spacelessSentence = '';
  
  //prepare data by parsing out all spaces
  spacelessSentence = sentence.split(" ").join("")
  spacelessSentenceArray = spacelessSentence.split("");
  
  // Second pass with mentor
  // iterate through sentence and parse out each letter
  spacelessSentenceArray.forEach((element,i) => {
    console.log(element, i);
    const currentLetter = spacelessSentence[i];
    if (!results[currentLetter]) { // object key doesn't yet exist so undefined
      // add the character index to the current character array in the results object
      // MENTOR QUESTION 1: how do I push an array of values into an object?
      results[currentLetter] = [i]; // index
    } else { // update character index array in results object with additional index 
      // MENTOR QUESTION 2: how do I push an update to an array of values into an object?
      results[currentLetter].push(i); 
    }
    
  });
  // Working first pass with C style loop
  /* for (let i = 0; i < spacelessSentence.length; i++) {
    const currentLetter = spacelessSentence[i];
    if (!results[currentLetter]) { // object key doesn't yet exist so undefined
      // add the character index to the current character array in the results object
      // MENTOR QUESTION 1: how do I push an array of values into an object?
      results[currentLetter] = [i]; // index
    } else { // update character index array in results object with additional index 
      // MENTOR QUESTION 2: how do I push an update to an array of values into an object?
      results[currentLetter].push(i); 
    }
  } */
  console.log('\nEOF:')
  return results;
};

console.log(letterPositions('h uh'));