// cypher is to use the 15th letter after the initial letter
// create function to encode message and output it to the console
// charCodeAt (letters into a number)
// from CharCode (number into letters)

// https://www.sciencebuddies.org/science-fair-projects/references/ascii-table

let entryInput = prompt("Enter a message: ");

function cypher(str) {
  let entryMessage = "";
  for (let i = 0; i < str.length; i++) {
    if (entryInput[i].toLowerCase() === entryInput[i].toUpperCase()) {
      entryMessage += str[i];
      // symbols to remain the same
    }
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 75) {
      code += 15;
      entryMessage += String.fromCharCode(code);
      // uppercase conversion
    } else if (code > 75 && code <= 90) {
      code -= 11;
      entryMessage += String.fromCharCode(code);
      // OUT OF RANGE: uppercase conversion
    } else if (code >= 97 && code <= 107) {
      code += 15;
      entryMessage += String.fromCharCode(code);
      // lowercase conversion
    } else if (code > 107 && code <= 122) {
      code -= 11;
      entryMessage += String.fromCharCode(code);
      // OUT OF RANGE: lowercase conversion
    }
  }
  return entryMessage;
}

let caesarCypher = cypher(entryInput);
console.log(caesarCypher);

// IF IT IS IN RANGE, I ADD 15
// IF IT OUT OF RANGE, I ADD 15 AND MINUS 26. (15 - 26) IS (- 11). THATS WHY THE MINUS 11 IS THERE
