import { Maybe } from "./maybe";

describe("Testing Maybe", () => {
  it("should be able to use Maybe class", () => {
    const result = Maybe.some(10)
      .map((value) => value + 10)
      .map((value) => value + 30)
      .getOrElse(0);

    expect(result).toBe(50);
  });

  it("when maybe receive a zero value should be able to return a monad value", () => {
    const result = Maybe.some(0)
      .map((value) => value + 10)
      .map((value) => value + 30)
      .getOrElse(0);

    expect(result).toBe(40);
  });

  it("when maybe receive a null value should be able to return a throw error", () => {
    expect(() => Maybe.some(null)).toThrowError();
  });

  it("should be able to return a default value, if has an invalid operation", () => {
    const obj: Record<string, number> = {
      a: 10,
      b: 2,
    };

    const result = Maybe.some(100)
      .map((value) => obj[value] + 10)
      .map((value) => obj[value] + 30)
      .getOrElse(0);

    expect(result).toBe(0);
  });

  it("should be able to return a sum of a list", () => {
    const numbers = [1, 2, 3, 4];

    const result = Maybe.some(numbers)
      .map((numbers) => numbers.reduce((acc, cur) => acc + cur, 0))
      .getOrElse(0);

    expect(result).toBe(10);
  });
});
