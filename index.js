const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('174.115.58.57', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned coordinates:' , coordinates);
});

const coords = { latitude: 45.3295, longitude: -75.6156 }
fetchISSFlyOverTimes(coords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work", error);
    return;
  }
  console.log('It worked! Returned pass times:', passTimes)
});