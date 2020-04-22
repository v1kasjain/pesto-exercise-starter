function longestWordInString(...args) {
  let arrayOfwords = args[0].split(' ');
  let longestWordLength = 0;
  arrayOfwords.forEach(singleWord => {
    if (singleWord.length > longestWordLength) {
      longestWordLength = singleWord.length;
    }
  });
  return longestWordLength;
}

export { longestWordInString };
