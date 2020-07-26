/*
REQUIREMENTS:
Create a function called countLetters.

The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

Before implementing this function, we need to think about how it will report back these counts. 
It's not that we want to know how many H's are in this sentence?, because that would just be a number. 
We need it report back multiple numbers.

*/
  
// declare countLetters(string)
const countLetters = function (sentence) {

  // declare return object
  let letterObject = {};
  let spacelessSentence = ''; // for use in removing spaces

  spacelessSentence = sentence.split(" ").join("")

  // iterate through string and peel off each character
  for (let i = 0; i < spacelessSentence.length; i++) {
    const currentLetter = spacelessSentence[i];
    if (!letterObject[currentLetter]){ // first instance of letter because it is undefined
      letterObject[currentLetter] = 1;
    } else { // subsequent instances of letter
      letterObject[currentLetter]++;
    }
  }
  return letterObject;
}
console.log(countLetters('LHL hello'));

