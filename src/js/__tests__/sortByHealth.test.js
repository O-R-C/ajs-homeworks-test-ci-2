import sortByHealth from "../sortByHealth";

const expected = [
  { name: "маг", health: 100 },
  { name: "лучник", health: 80 },
  { name: "мечник", health: 10 },
];

const data = [
  [
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
  ],
  [
    { name: "мечник", health: 10 },
    { name: "лучник", health: 80 },
    { name: "маг", health: 100 },
  ],
  [
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
    { name: "маг", health: 100 },
  ],
  [
    { name: "лучник", health: 80 },
    { name: "маг", health: 100 },
    { name: "мечник", health: 10 },
  ],
  [
    { name: "маг", health: 100 },
    { name: "лучник", health: 80 },
    { name: "мечник", health: 10 },
  ],
  [
    { name: "маг", health: 100 },
    { name: "мечник", health: 10 },
    { name: "лучник", health: 80 },
  ],
];

const dataForTest = data.map((arr) => [arr, expected]);

describe("sort arr by health", () => {
  test.each(dataForTest)("%o", (arr, expectedArr) => {
    const result = sortByHealth(arr);

    expect(result).toEqual(expectedArr);
  });
});
