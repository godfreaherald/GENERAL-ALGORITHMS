function longestWord(str) {
  let words = str.split(' ');
  let longestWord = '';
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

console.log(
  longestWord(
    'My name is Wambua the watchman of God and the osftwares engineer '
  )
);
