const MoviesAnalyzer = require("../src/MoviesAnalyzer");

const movies = [
  {
    title: "The Shawshank Redemption",
    duration: "PT142M",
    actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    ratings: [
      { userId: 7001, rating: 8 },
      { userId: 9250, rating: 9 },
      { userId: 34139, rating: 8 },
    ],
    favorites: [66380, 7001, 9250, 34139],
    watchlist: [15291, 51417, 62289, 6146, 71389, 93707],
  },
  {
    title: "The Godfather",
    duration: "PT175M",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    ratings: [
      { userId: 15291, rating: 9 },
      { userId: 51417, rating: 9 },
      { userId: 7001, rating: 9 },
      { userId: 9250, rating: 7 },
      { userId: 71389, rating: 9 },
    ],
    favorites: [15291, 51417, 7001, 9250, 71389, 93707],
    watchlist: [62289, 66380, 34139, 6146],
  },
  {
    title: "The Dark Knight",
    duration: "PT152M",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    ratings: [
      { userId: 15291, rating: 8 },
      { userId: 7001, rating: 9 },
      { userId: 9250, rating: 6 },
      { userId: 34139, rating: 7 },
      { userId: 93707, rating: 7 },
    ],
    favorites: [15291, 7001, 9250, 34139, 93707],
    watchlist: [51417, 62289, 6146, 71389],
  },
  {
    title: "Pulp Fiction",
    duration: "PT154M",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    ratings: [
      { userId: 62289, rating: 8 },
      { userId: 66380, rating: 5 },
      { userId: 6146, rating: 6 },
      { userId: 71389, rating: 7 },
    ],
    favorites: [15291, 51417, 62289, 66380, 71389, 93707],
    watchlist: [7001, 9250, 34139, 6146],
  },
  {
    title: "Schindler's List",
    duration: "PT195M",
    actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    ratings: [
      { userId: 62289, rating: 8 },
      { userId: 66380, rating: 5 },
      { userId: 6146, rating: 6 },
      { userId: 71389, rating: 7 },
    ],
    favorites: [62289, 66380, 6146, 71389],
    watchlist: [15291, 51417, 7001, 9250, 93707],
  },
];

const users = [
  {
    userId: 15291,
    email: "Constantin_Kuhlman15@yahoo.com",
    friends: [7001, 51417, 62289],
  },
  {
    userId: 7001,
    email: "Keven6@gmail.com",
    friends: [15291, 51417, 62289, 66380],
  },
  {
    userId: 51417,
    email: "Margaretta82@gmail.com",
    friends: [15291, 7001, 9250],
  },
  {
    userId: 62289,
    email: "Marquise.Borer@hotmail.com",
    friends: [15291, 7001],
  },
];

describe("ExampleFromReadme", () => {
  describe("topFavouriteMoviesAmongFriends", () => {
    it(`should return top watchlisted movies among friends for user 62289`, () => {
      const analyzer = new MoviesAnalyzer(movies, users);
      const actual = analyzer.topWatchlistedMoviesAmongFriends(62289);
      expect(actual).toEqual([
        "Schindler's List",
        "Pulp Fiction",
        "The Shawshank Redemption",
      ]);
    });
  });
});
