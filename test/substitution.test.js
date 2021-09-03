const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests", () => {
    it("should return false if no alphabet", () => {
      const message = "inputed";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if < 26 characters", () => {
      const message = "thinkful";
      const alphabet = "short";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if duplicate chars", () => {
      const message = "thinkful";
      const alphabet = "abcabc";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should encode 'input'", () => {
      const message = "You are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet);
      const expected = "elp xhm xf mbymwwmfj dne";

      expect(actual).to.equal(expected);
    });

    it("should work with non-alpha characters", () => {
      const message = "message";
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "y&ii$r&";

      expect(actual).to.equal(expected);
    });

    it("should decode 'input'", () => {
      const message = "jrufscpw";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(message, alphabet, false);
      const expected = "thinkful";

      expect(actual).to.equal(expected);
    });
});
