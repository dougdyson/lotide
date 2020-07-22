let reverseWord = '';

function reverse(params) {
  
  const length = params.length;
  console.log(params);

  // iterate the array
  for (let i = 0; i < length; i++) {
    for (let r = params[i].length; r >= 0; r--) {
      reverseWord = reverseWord + params[i].charAt(rv);
    }
    console.log(reverseWord);
    reverseWord = ''
  }
}

console.log('EOF');