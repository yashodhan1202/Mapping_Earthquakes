// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with a center and zoom level. This was to identify the start point and end point of los angeles and san franscico
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// // Coordinates for each point to be used in the line. Just start point and end point
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
//   ];

// Coordinates for each point to be used in the polyline. Route from LAX-SFO-SLC-SEA
let line = [
    [33.9416, -118.4085], // co-ordinates for LAX (Los Angeles)
    [37.6213, -122.3790], // co=ordinates for SFO (San Fransisco)
    [40.7899, -111.9791], // co-ordinates for SLC (Salt Lake City)
    [47.4502, -122.3088] // co-ordinates for SEA (Seattle)
  ];

// // Coordinates for each point to be used in the polyline. Route from SFO-AUS-YYZ-JFK
// let line = [
//     [37.6213, -122.3790], // Co-ordinate for SFO (San Fransisco)
//     [30.1975, 97.6664], // Co-ordinate for AUS (Austin-Bergstrom International Airport) 
//     [43.6777, 79.6248], // Co-ordinate for YYZ (Toronto Pearson Airport)
//     [40.6413, 73.7781] // Co-ordinate for (JFK JFK Airport)
//   ];  

// // Create a polyline using the line coordinates and make the line red. This is just for the start point and end point
// L.polyline(line, {
//     color: "red"
//   }).addTo(map);

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "yellow"
    // weight: 4;
    // Opacity: 0.5
 }).addTo(map);

// // // Create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   }); // this method can be used instead of .setview to get the same output. This is useful if we need to add multiple layers or background image

// // We create the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "Black",
//     fillcolor: "#ffffa1"

//  }).addTo(map);

// // Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// We create the tile layer that will be the background of our map. changed style of the Map from Dark V10 to satellite-streets-v11
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);