// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = false, encode = true) {
    // create an array 'abc' of the alphabet.
    const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                 "n","o","p","q","r","s","t","u","v","w","x","y","z"];
    // checks if alphabet = 26 or if undefined; if not, return false.
    if (alphabet.length !== 26 || !alphabet) return false;
    let duplicate = false;
    // 'split()' 'alphabet' and 'input' parameter into an array 'split'.
    let sub = alphabet.toLowerCase().split("");
    let message = input.toLowerCase().split("");

    // testing for duplication.
      for (let i = 0; i < sub.length; i++) {
        for (let j = i + 1; j < sub.length; j++) {
            if (sub[i] === sub[j]) return false;
        }
    }

    // if parameter 'encode = true' run the following;
    if (encode) {
      // map() updated 'input' parameter (message) to new array;
      let mapped = message.map((letter) => {
        // if iteration (letter) is a space (" ") return a space;
        if (letter === " ") return letter;
      // get the 'abc' indexOf() iteration 'letter'.
        let index = abc.indexOf(letter);
        // return the new 'index' to find the 'sub' letter of that index.
        return sub[index];
      })
      // return 'mapped' array of new letters, 'join()' together to create new string.
      return mapped.join("")
    }

    // if parameter 'encode = false' (decode) run the following;
    if (!encode) {
      // map() updated 'input' parameter (message) to new array;
      let mapped = message.map((letter) => {
        // if iteration (letter) is a space (" ") return a space;
        if (letter === " ") return letter;
         // get the 'abc' indexOf() iteration 'letter'.
        let index = sub.indexOf(letter);
        // return the new 'index' to find the 'sub' letter of that index.
        return abc[index];
      })
      // return 'mapped' array of new letters, 'join()' together to create new string.
      return mapped.join("");
    }
  }

  //console.log(substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"))
  //> 'elp xhm xf mbymwwmfj dne'
  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
