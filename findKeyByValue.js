/*
REQUIREMENTS:
Find and return a value of key of an params
*/

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function name(params, genre ) {
 
  let matchedKey;
  let keys = Object.keys(params); 
  
  for (const iterator of keys) {
    if (iterator === genre) {
      matchedKey = iterator;
    }
  }
  return matchedKey;
}
console.log(findKeyByValue(bestTVShowsByGenre, 'sci_fi'));