function capitalizeFirstLetter(str) {
  let words = str.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return words.join(' ');
}

console.log(capitalizeFirstLetter('testing the Js application'));
