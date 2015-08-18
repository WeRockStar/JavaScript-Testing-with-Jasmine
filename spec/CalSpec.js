describe("Calculator", function() {
  it("should be able plus operator", function() {
    var result = 1 + 3;
    expect(add(1, 3)).toEqual(result);
  });

  it("should be able multiply operator", function() {
    var result = 1 * 3;
    expect(mul(1, 3)).toEqual(result);
  });
  it("should be able divide operator", function() {
    var result = 1 / 3;
    expect(divide(1, 3)).toEqual(result);
  });
  it("should be able minus operator", function() {
    var result = 1 - 3;
    expect(minus(1, 3)).toEqual(result);
  });
});
