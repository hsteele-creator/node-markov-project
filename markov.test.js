const { testData } = require("./markov");

console.log(testData.words);

describe("testing the words array", () => {
  test("words should be an array", () => {
    expect(testData.words).toEqual(expect.any(Array));
  });
  test("any word should be a string", () => {
    const random = (num) => {
        return Math.floor(Math.random() * num)
    }
    expect(testData.words[random(testData.words.length)]).toEqual(expect.any(String))
  })
});
