const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

// Map function Coordinates
d3.json(url).then(receivedData => console.log(receivedData.map(coordinate => coordinate.location.latitude)));
d3.json(url).then(receivedData => console.log(receivedData.map(coordinate => coordinate.location.longitude)));
