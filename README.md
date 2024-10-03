# Find top watchlisted movies among friends

You are working on a movie fanpage social site. It requires a new functionality to be implemented: find top watchlisted movies among friends.

# Task

Implement the `MoviesAnalyzer`:`topWatchlistedMoviesAmongFriends` method according to the following requirements:

1. It should return an array of **top four** movie titles, that have been most watchlisted by friends of a given user.
2. If there are no such movies, then an empty list should be returned or as many movies as possible.
3. Movies that have equal watchlist count, should be ordered alphabetically.

## Example data

The data (_movies_ and _users_) is available in `data.json`. Testcases are defined in `testcases.json`.

### Movies collection

- `movie.ratings` is an array of all the **ratings** (`rating`) that certain users (`userId`) have given to that `movie`
- `movie.favorites` is an array of IDs of users who have **favorited** that `movie`
- `movie.watchlist` is an array of IDs of users who have **watchlisted** that `movie`

```json
[
  {
    "title": "The Shawshank Redemption",
    "duration": "PT142M",
    "actors": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
    "ratings": [
      { "userId": 7001, "rating": 8 },
      { "userId": 9250, "rating": 9 },
      { "userId": 34139, "rating": 8 }
    ],
    "favorites": [66380, 7001, 9250, 34139],
    "watchlist": [15291, 51417, 62289, 6146, 71389, 93707]
  },
  {
    "title": "The Godfather",
    "duration": "PT175M",
    "actors": ["Marlon Brando", "Al Pacino", "James Caan"],
    "ratings": [
      { "userId": 15291, "rating": 9 },
      { "userId": 51417, "rating": 9 },
      { "userId": 7001, "rating": 9 },
      { "userId": 9250, "rating": 7 },
      { "userId": 71389, "rating": 9 }
    ],
    "favorites": [15291, 51417, 7001, 9250, 71389, 93707],
    "watchlist": [62289, 66380, 34139, 6146]
  },
  {
    "title": "The Dark Knight",
    "duration": "PT152M",
    "actors": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    "ratings": [
      { "userId": 15291, "rating": 8 },
      { "userId": 7001, "rating": 9 },
      { "userId": 9250, "rating": 6 },
      { "userId": 34139, "rating": 7 },
      { "userId": 93707, "rating": 7 }
    ],
    "favorites": [15291, 7001, 9250, 34139, 93707],
    "watchlist": [51417, 62289, 6146, 71389]
  },
  {
    "title": "Pulp Fiction",
    "duration": "PT154M",
    "actors": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    "ratings": [
      { "userId": 62289, "rating": 8 },
      { "userId": 66380, "rating": 5 },
      { "userId": 6146, "rating": 6 },
      { "userId": 71389, "rating": 7 }
    ],
    "favorites": [15291, 51417, 62289, 66380, 71389, 93707],
    "watchlist": [7001, 9250, 34139, 6146]
  },
  {
    "title": "Schindler's List",
    "duration": "PT195M",
    "actors": ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley"],
    "ratings": [
      { "userId": 62289, "rating": 8 },
      { "userId": 66380, "rating": 5 },
      { "userId": 6146, "rating": 6 },
      { "userId": 71389, "rating": 7 }
    ],
    "favorites": [62289, 66380, 6146, 71389],
    "watchlist": [15291, 51417, 7001, 9250, 93707]
  }
]
```

### Users collection

- `user.friends` is an array of IDs of other users who are **friends** of that `user`

```json
[
  {
    "userId": 15291,
    "email": "Constantin_Kuhlman15@yahoo.com",
    "friends": [7001, 51417, 62289]
  },
  {
    "userId": 7001,
    "email": "Keven6@gmail.com",
    "friends": [15291, 51417, 62289, 66380]
  },
  {
    "userId": 51417,
    "email": "Margaretta82@gmail.com",
    "friends": [15291, 7001, 9250]
  },
  {
    "userId": 62289,
    "email": "Marquise.Borer@hotmail.com",
    "friends": [15291, 7001]
  }
]
```

## Example output

Your implementation should return following output for **userId=62289** for example data:

```json
["Schindler's List", "Pulp Fiction", "The Shawshank Redemption"]
```

- In the example above, user with id `62289` has two friends: user with `id=15291` and with `id=7001`
- The user with `id=15291` has watchlisted the following movies: `"The Shawshank Redemption"`, `"Schindler's List"`.
- The user with `id=7001` has watchlisted the following movies: `"Pulp Fiction"`, `"Schindler's List"`.
- After we sum up the watchlist count for each movie, we get:
  - `"The Shawshank Redemption"`: 1
  - `"Schindler's List"`: 2
  - `"Pulp Fiction"`: 1
- After sorting the movies (primary sort: by watchlist count, secondary sort: alphabetically) we get:
  - `"Schindler's List"`: 2
  - `"Pulp Fiction"`: 1
  - `"The Shawshank Redemption"`: 1
- We take first 3 movies from the list above:
  - `["Schindler's List", "Pulp Fiction",  "The Shawshank Redemption"]`

## Hints

- The example data above as well as example output are used in `exampleFromReadme.spec.ts` test file.

# Setup

1. `npm install` – install dependencies
2. `npm test` – run all tests once (this will be used to evaluate your solutions)
3. `npm run test:watch` - run all tests in _watch mode_ (optionally, you can use it locally if you prefer)

## Good luck!
