//arrays
function unique(str) {
  let values = [];
  for (let letter of str) {
    if (values.indexOf(letter) !== -1) {
      return false;
    }
    values.push(letter);
  }
  return true;
}

//objects
function unique2(str) {
  let values = {};
  for (let letter of str) {
    if (values[letter]) {
      return false;
    }
    values[letter] = 'exists';
  }
  return true;
}
//lastIndexOf

function unique3(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;
}
console.log(unique('abcdef'));
console.log(unique('abadeb'));
console.log(unique2('abcdef'));
console.log(unique2('abadeb'));
console.log(unique3('abcdef'));
console.log(unique3('abadeb'));
