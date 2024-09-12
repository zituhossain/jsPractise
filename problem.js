// First Repeating Character

function repeatChar(str) {
  let firstChar = str.charAt(0);

  let rep = "";
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == firstChar) {
      return firstChar;
    } else {
      return -1;
    }
  }
  return rep;
}

console.log(repeatChar("abbacddac"));

// First Non-repeating Character

function nonRepeatChar(str) {
  let firstChar = str.charAt(0);
  let nonRep = "";
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == firstChar) {
      str.slice(i, str[i].length);
      nonRep = nonRep + firstChar;
    }
  }
  return nonRep;
}

console.log(nonRepeatChar("cccabb"));
