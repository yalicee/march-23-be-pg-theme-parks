/* make sure you write your tests for your utils functions in here :eyes: */
const {
  arrangeParksData,
  prepareRidesData,
  arrangeRidesData,
} = require("../utils");
const rides = require("../db/data/rides");

describe("utils", () => {
  it("should return a nested array from the data passed to it", () => {
    const parks = [
      {
        park_name: "Thorpe Park",
        year_opened: 1979,
        annual_attendance: 1700000,
      },
      {
        park_name: "Alton Towers",
        year_opened: 1980,
        annual_attendance: 2520000,
      },
    ];
    const result = arrangeParksData(parks);
    const expected = [
      ["Thorpe Park", 1979, 1700000],
      ["Alton Towers", 1980, 2520000],
    ];
    expect(result).toEqual(expected);
  });
  it("should return back an array with each object having the correct park_id", () => {
    const ride = [
      {
        ride_name: "Tidal Wave",
        year_opened: 2000,
        park_name: "Thorpe Park",
        votes: 1,
      },
    ];

    park = [
      {
        park_id: 1,
        park_name: "Thorpe Park",
        year_opened: 1979,
        annual_attendance: 1700000,
      },
    ];

    const expected = [
      {
        ride_name: "Tidal Wave",
        year_opened: 2000,
        park_id: 1,
        votes: 1,
      },
    ];
    const result = prepareRidesData(ride, park);
    expect(expected).toEqual(result);
  });
  it("should return array with correct rides objects with a park_id key for a larger array", () => {
    const parks = [
      {
        park_id: 1,
        park_name: "Thorpe Park",
        year_opened: 1979,
        annual_attendance: 1700000,
      },
      {
        park_id: 2,
        park_name: "Alton Towers",
        year_opened: 1980,
        annual_attendance: 2520000,
      },
      {
        park_id: 3,
        park_name: "Chessington World of Adventures",
        year_opened: 1987,
        annual_attendance: 1400000,
      },
      {
        park_id: 4,
        park_name: "Tivoli Gardens",
        year_opened: 1843,
        annual_attendance: 3972000,
      },
    ];
    const result = prepareRidesData(rides, parks);
    const expected = [
      { ride_name: "Colossus", year_opened: 2002, park_id: 1, votes: 5 },
      { ride_name: "Stealth", year_opened: 2006, park_id: 1, votes: 4 },
      {
        ride_name: "Loggers Leap",
        year_opened: 1989,
        park_id: 1,
        votes: 9,
      },
      {
        ride_name: "Mr Monkeys Banana Ride",
        year_opened: 1994,
        park_id: 1,
        votes: 5,
      },
      { ride_name: "Tidal Wave", year_opened: 2000, park_id: 1, votes: 1 },
      {
        ride_name: "Rocky Express",
        year_opened: 1989,
        park_id: 1,
        votes: 5,
      },
      { ride_name: "Nemesis", year_opened: 1994, park_id: 2, votes: 5 },
      { ride_name: "The Smiler", year_opened: 2013, park_id: 2, votes: 1 },
      { ride_name: "Rita", year_opened: 2005, park_id: 2, votes: 5 },
      {
        ride_name: "Congo River Rapids",
        year_opened: 1994,
        park_id: 2,
        votes: 3,
      },
      { ride_name: "Enterprise", year_opened: 1984, park_id: 2, votes: 5 },
      {
        ride_name: "Gallopers Carousel",
        year_opened: 1991,
        park_id: 2,
        votes: 7,
      },
      {
        ride_name: "Rattlesnake",
        year_opened: 1998,
        park_id: 3,
        votes: 11,
      },
      { ride_name: "Tiger Rock", year_opened: 2018, park_id: 3, votes: 3 },
      { ride_name: "KOBRA", year_opened: 2010, park_id: 3, votes: 1 },
      {
        ride_name: "Tiny Truckers",
        year_opened: 1994,
        park_id: 3,
        votes: 2,
      },
      { ride_name: "The Demon", year_opened: 2004, park_id: 4, votes: 8 },
      { ride_name: "The Caravan", year_opened: 1974, park_id: 4, votes: 1 },
      {
        ride_name: "The Bumper Cars",
        year_opened: 1926,
        park_id: 4,
        votes: 25,
      },
      {
        ride_name: "The Little Pilot",
        year_opened: 1990,
        park_id: 4,
        votes: 6,
      },
    ];
    expect(expected).toEqual(result);
  });
  it("should return a nested array from the data passed to it", () => {
    const rides = [
      { ride_name: "Colossus", year_opened: 2002, park_id: 1, votes: 5 },
      { ride_name: "Stealth", year_opened: 2006, park_id: 1, votes: 4 },
      {
        ride_name: "Loggers Leap",
        year_opened: 1989,
        park_id: 1,
        votes: 9,
      },
    ];
    const expected = [
      ["Colossus", 2002, 1, 5],
      ["Stealth", 2006, 1, 4],
      ["Loggers Leap", 1989, 1, 9],
    ];
    const result = arrangeRidesData(rides);
    expect(result).toEqual(expected);
  });
});
