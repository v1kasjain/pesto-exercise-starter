import { isString } from "util";

function abbreviateString(str) {
  if (!isString(str)) {
    throw 'Not a valid string';
  }

  // creating array of words from white space seprated string
  const arrayOfWords = str.split(' ');
  return arrayOfWords[0] + ' ' + (arrayOfWords[arrayOfWords.length-1]).charAt(0).toUpperCase() + '.'; 
}

export { abbreviateString };
