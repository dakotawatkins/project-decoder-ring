// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests", () => {
    it("should return false if shift = 0", () => {
      const message = "abcde";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if 'shift' < -25", () => {
      const message = "zebra magazine";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
    
    it("should return false if 'shift' > 25", () => {
        const message = "abcde";
        const shift = 26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
  
    it("should encode 'input' by shifting letters", () => {
      const message = "thinkful";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "wklqnixo";

      expect(actual).to.equal(expected);
    });

    it("should ignore spaces and non-alpha chars, and ignores capitals", () => {
      const message = "This is a secret message!";
      const shift = 8;
      const actual = caesar(message, shift);
      const expected = "bpqa qa i amkzmb umaaiom!";

      expect(actual).to.equal(expected);
    });

    it("should loop to start of alphabet if at the end of the alphabet", () => {
      const message = "zebra magazine";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "cheud pdjdclqh";

      expect(actual).to.equal(expected);
    });

    it("should shift to the left if 'shift' is negative", () => {
      const message = "thinkful";
      const shift = -3;
      const actual = caesar(message, shift);
      const expected = "qefkhcri";

      expect(actual).to.equal(expected);
    });

    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "wklqnixo";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "This is a secret message!";
      const shift = 8;
      const actual = caesar(message, shift);
      const expected = "bpqa qa i amkzmb umaaiom!";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "BPQA qa I amkzmb umaaiom!";
      const shift = 8;
      const actual = caesar(message, shift, false);
      const expected = "this is a secret message!";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "wbyox jxdxwfkb";
      const shift = -3;
      const actual = caesar(message, shift, false);
      const expected = "zebra magazine";

      expect(actual).to.equal(expected);
    });
});
