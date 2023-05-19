const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {
  // CODE HERE
  test("return an array", function() {
    expect(Object.getPrototypeOf(shuffle([true]))).toEqual([])
  })
  test("return an array of the same length as the argument sent in", function() {
    expect(shuffle([true]).length).toBe(1)
  })
});
