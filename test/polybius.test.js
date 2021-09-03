const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests", () => {
    it("should encode 'input' using polybius square", () => {
      const message = "thinkful";
      const actual = polybius(message);
      const expected = "4432423352125413";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is and ignore capitals", () => {
      const message = "Hello world";
      const actual = polybius(message);
      const expected = "3251131343 2543241341";

      expect(actual).to.equal(expected);
    });

    it("should decode 'input' & ignore spaces", () => {
      const message = "3251131343 2543241341";
      const actual = polybius(message, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "2345 235134341122514";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
});
