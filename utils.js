function arrangeParksData(parksData) {
  return parksData.map((parkObj) => Object.values(parkObj));
}

function prepareRidesData(ridesData, parksData) {
  // Create a new array to store the prepared rides data
  const preparedRides = [];

  // Loop through each ride in the rides data
  ridesData.forEach((ride) => {
    // Find the park that matches the ride's park_name
    const park = parksData.find((park) => park.park_name === ride.park_name);

    // If a matching park is found, add the ride to the preparedRides array with the correct park_id
    if (park) {
      preparedRides.push({
        ride_name: ride.ride_name,
        year_opened: ride.year_opened,
        park_id: park.park_id,
        votes: ride.votes,
      });
    }
  });

  return preparedRides;
}

function arrangeRidesData(ridesData) {
  return ridesData.map((ridesObj) => Object.values(ridesObj));
}

module.exports = { arrangeParksData, prepareRidesData, arrangeRidesData };
