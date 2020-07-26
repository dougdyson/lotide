/*
REQUIREMENTS:
countOnly will be given an array and an object. 
It will return an object containing counts of everything that the input object listed.
*/

//let countedItems = 0

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `\u2705\u2705\u2705 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `\u274C\u274C\u274C Assertion Failed: ${actual} === ${expected}`;
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let output = {};
  
  allItems.forEach((element, index) => {
    if (itemsToCount[element]) {
      if (output[element]) {
        output[element]++;
      } else {
        output[element] = 1;
      }
    }
  })
  return (output);
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
console.log(result1);

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));