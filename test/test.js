/* global describe */
/* global it */

const assert = require("chai").assert;
const multiply = require("../multiply");

describe("Multiply", () => {
  it("Return 1 when multiplying 1 and 1", () => {
  assert.equal(multiply(1, 1), 1);
  });

  it("Return 4 when multiplying 2 and 2", () => {
    assert.equal(multiply(2, 2), 4);
  });

  it("Return 9 when multiplying 3 and 3", () => {
    assert.equal(multiply(3, 3), 9);
  });

  it("Return 16 when multiplying 4 and 4", () => {
    assert.equal(multiply(4, 4), 16);
  });

  it("Return 23 * 45 when multiplying 23 and 45", () => {
    assert.equal(multiply(23, 45), 2 * 45);
  });

});
