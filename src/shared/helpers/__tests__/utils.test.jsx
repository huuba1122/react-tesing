// import { describe, expect, it } from "vitest";
import Utils from "../utils";

describe("Sum function util", () => {
  it("should return sum of args", () => {
    const args = [1, 2, 3];
    const expected = 6;

    expect(Utils.sum(...args)).toBe(expected);
  });

  it("should return 0 when have not arg", () => {
    const args = [];
    const expected = 0;

    expect(Utils.sum(...args)).toBe(expected);
  });
});
