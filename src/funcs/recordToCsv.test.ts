import assert from "node:assert";
import { describe, it } from "node:test";
import Config from "../types/Config";
import recordToCsv, { fixCsvValue } from "./recordToCsv";

describe("fixCsvValue", () => {
  it("wraps all values in double quotes", () => {
    const fixed = fixCsvValue("test, test");
    assert.strictEqual(fixed, '"test, test"');
  });

  it("changes single double-quotes to double double-quotes", () => {
    const fixed = fixCsvValue('test" test');
    assert.strictEqual(fixed, '"test"" test"');
  });

  it("handles null", () => {
    const fixed = fixCsvValue(null);
    assert.strictEqual(fixed, '""');
  });

  it("handles undefined", () => {
    const fixed = fixCsvValue(null);
    assert.strictEqual(fixed, '""');
  });

  it("handles strange data types without crashing", () => {
    const fixed = fixCsvValue({ msg: "hello" });
    assert.strictEqual(fixed, '"[object Object]"');
  });
});

describe("recordToCsv", () => {
  const basicConfig: Config<{ n: number }> = {
    data: [{ n: 1 }, { n: 2 }, { n: 3 }],
    columns: [{ key: "n", title: "Num" }],
    fileName: "",
    separator: ",",
  };

  const complexConfig: Config<{ n: number; s: string }> = {
    data: [
      { n: 1, s: "a" },
      { n: 2, s: 'b"c' },
      { n: 3, s: "d,e" },
    ],
    columns: [
      { key: "n", title: "Num", value: (v) => `${Number(v) * 2}` },
      { key: "s", title: "Str" },
    ],
    fileName: "",
    separator: ",",
  };

  it("converts basic data", () => {
    const csvText = recordToCsv(basicConfig);
    assert.strictEqual(csvText, '"Num"\n"1"\n"2"\n"3"');
  });

  it("converts complex data", () => {
    const csvText = recordToCsv(complexConfig);
    assert.strictEqual(csvText, '"Num","Str"\n"2","a"\n"4","b""c"\n"6","d,e"');
  });
});
