const MoviesAnalyzer = require("../src/MoviesAnalyzer");
const { movies, users } = require("./data.json");
const testcases = require("./testcases.json");

describe("MoviesAnalyzer", () => {
  const analyzer = new MoviesAnalyzer(movies, users);
  testcases.forEach(({ userId, expected }) => {
    test(`should return top watchlisted movies among friends for user ${userId}`, () => {
      const actual = analyzer.topWatchlistedMoviesAmongFriends(userId);
      expect(actual).toEqual(expected);
    });
  });
});
