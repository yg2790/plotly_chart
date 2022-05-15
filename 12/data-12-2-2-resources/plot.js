// Check if file loaded correctly
console.log(cityGrowths)

// Sort cities in descending population increases from 2016 
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();
console.log(sortedCities)

// Select top five cities in term of growth
var topFiveCities = sortedCities.slice(0,5)
console.log(topFiveCities)

// Create separate variable for city names and city growths
var topFiveCitiesNames = topFiveCities.map(city => city.City)
var topFiveCitiesGrowth = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// OR 
// var topFiveCityNames = cityGrowths.map(function(city){
    // return city.City });
// var topFiveCityGrowths = cityGrowths.map(function(growth){
    // return city.Increase_from_2016});

console.log(topFiveCitiesNames)
console. log(topFiveCitiesGrowth)

// Plot result as Bar Chart
var trace = {
    x: topFiveCitiesNames,
    y: topFiveCitiesGrowth,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapid Growing Cities",
    xaxis: {title: 'City'},
    yaxis: {title: 'Population Growth , 2016-2017'}
};
Plotly.newPlot("bar-plot", data, layout);

// Seven top largest cities by population
var populationCities = cityGrowths.sort((a,b) => b.population - a.population);
console.log(populationCities);

var topSevenCities = populationCities.slice(0,7);
console.log(topSevenCities);

var topSevenCitiesNames = topSevenCities.map(city => city.City);
var topSevenCitiesPopulation = topSevenCities.map(city=> parseInt(city.population));
console.log(topSevenCitiesNames)
console.log(topSevenCitiesPopulation)

var trace = {
    x: topSevenCitiesNames,
    y: topSevenCitiesPopulation,
    type: 'bar'
};
var data = [trace];
var layout = {
    title: "Top Seven Most Populated Cities",
    xaxis: {title: 'City'},
    yaxis: {title: 'Population'}
}
Plotly.newPlot("bar-plot", data, layout);