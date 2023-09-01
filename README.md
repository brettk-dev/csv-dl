# csv-dl

CSV for the frontend.

## Description

A small library that converts a JavaScript object to a CSV file download in the browser.

The CSV file format is based on [RFC 4180](https://www.ietf.org/rfc/rfc4180.txt).

## Installation

```sh
npm install csv-dl
```

## Usage

```JavaScript
import downloadCsv from "download-csv";

// Get your data.
const data = [
  { n: 1, s: "one" },
  { n: 2, s: "two" },
  { n: 3, s: "three" },
];

// Define your column layout.
const columns = [
  // The order here is the same as the output.
  { key: "s", title: "Word" },
  // It works with strings and numbers (and any value).
  { key: "n", title: "Number" },
  // You can use the same key twice and modify the value.
  { key: "n", title: "Doubled", value: (n) => n * 2 },
];

// Generate the CSV file and begin the download in the browser.
downloadCsv({
  // Columns from above.
  columns,
  // Data from above.
  data,
  // The ".csv" will be appended if you leave it off.
  fileName: "My CSV File",
  // By default the separator is ",", but you can change it to whatever you want.
  separator: ",",
});
```
