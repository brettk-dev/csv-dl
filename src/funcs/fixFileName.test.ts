import assert from "node:assert";
import { describe, it } from "node:test";
import fixFileName from "./fixFileName";

describe("fixFileName", () => {
  it("adds the .csv extension if it's not there", () => {
    const fixed = fixFileName("abc");
    assert.strictEqual(fixed, "abc.csv");
  });

  it("doesn't add the .csv extension if it is there already", () => {
    const fixed = fixFileName("abc.csv");
    assert.strictEqual(fixed, "abc.csv");
  });

  it("adds the .csv extension even if the file already has another extension", () => {
    const fixed = fixFileName("abc.txt");
    assert.strictEqual(fixed, "abc.txt.csv");
  });
});
