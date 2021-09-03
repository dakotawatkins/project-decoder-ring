// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // turns input to lowercase, this will help ignore case letters. 
    // Will also give correct unicode.
    let messageCase = input.toLowerCase();
    // splits() each index of the 'message' as a separate array index.
    let message = messageCase.split(""); 
    const polySquare = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z"]
    ];
    
    // encode
    if(encode){
      // map() 'message' array to create new array of encoded values.
      let mapped = message.map((letter) => {
        // 'uni' turns letter into unicode number.
        const uni = letter.charCodeAt(0);

        //test 'uni' (unicode) value for lowercase alphabet value && not a space.
        //meets 'no additional symbols' criterea.
        if((uni < 97 || uni > 122) && uni != 32) return letter;

        //loop through 'polySquare' rows.
        for (let i = 0; i < polySquare.length; i++) {
          //loop through iteration 'i' index (columns).
          for (let j = 0; j < polySquare[i].length; j++) {
            //if matching letter is 'i' or 'j', return "42" to satisfy test criterea.
            if (letter === "i" || letter === "j") return "42";
            //if matching letter is a space, return a space.
            if (letter === " ") return " ";
            //if matching letter found, return column/row index.
            if (letter === polySquare[i][j]) return `${j + 1}${i + 1}`;
          }
        }
      })
      //join() 'mapped' array into a string.
      let encoded = mapped.join("");
      return encoded;
    }

    // decode
    if (!encode) {
      let decoded = "";
      // loop through 'message'
      for (let i = 0; i < message.length; i = i + 2) {
        // check if iteration is a space " ".
        if (message[i] === " ") {
          // if 'message' is a space, add a space to 'decoded'.
          decoded = decoded + " ";
          // if 'message' is a space, increment 1 instead of 2:
          // from above: i = i + 2 ==> (i+2) = (i+2) - 1 (below) ==> i = i + 1; returns increment to 1;
          i = i - 1;
          // run 'continue' to return to i+=2 for next iteration (once the space has been added).
          continue;
        }  
        if (!message[i + 1]) return false;
        decoded = decoded + polySquare[message[i + 1] - 1][message[i] - 1];
        //console.log(decoded)
      }
      return decoded;
    }
  }

  //console.log(polybius("44324233521254134", false)); //> 

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
