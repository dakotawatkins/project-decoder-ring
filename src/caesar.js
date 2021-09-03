// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // returns false if no 'shift' parameter or shift===0 or shift<-25 or >25.
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    // if parameter set to decode (encode = false), we shift the opposite direction (decode).
    if (!encode) shift = 0 - shift;
    // turns input to lowercase, this will help ignore case letters. Will also give correct unicode. 
    let messageCase = input.toLowerCase();
    // splits() each index of the 'message' as a separate array index.
    let message = messageCase.split("");
    //return input.charCodeAt(0); //need to put to lowercase before this step.
    //return String.fromCharCode(116, 32, 116);  //> 't t'
   
    // map() through each index (letter) to create a new array of changed letter's.
    const mapped = message.map((letter) => {
      // 'uni' turns letter into unicode number.
      let uni = letter.charCodeAt(0);

      // if not a lowercase alphabet unicode (space, comman, etc.), return character (letter).
      if (uni < 97 || uni > 122) return letter;
      
      // use the 'shift' param. to shift 'uni' to new unicode.
      let uniShifted = uni + shift;
      
      // if shifted unicode value 'uniShifted' is greater than 122 (z), then loop back to 97 (a).
      if (uniShifted > 122) uniShifted = uniShifted - 26;
      if (uniShifted < 97) uniShifted = uniShifted + 26;
      
      // turn 'unShifted' (new unicode value) back to alphabet character.
      let alphaShifted = String.fromCharCode(uniShifted);

      // returns array of map()'ed shifted letters.
      return alphaShifted;
    })

    // join 'mapped' array into a string.
    let result = mapped.join("");

    // returns a string of shifted character from the parameters.
    return result;
  }
  //console.log(caesar("wxebra", -3));

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
