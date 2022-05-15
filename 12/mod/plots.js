// Bar Chart
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);

// Pie Chart
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

// Mapping functions
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
   return num * 2;
});
console.log(doubled);
// Method 2
var doubled = numbers.map(function(integer) {
    return integer * 2;
    });

// Add 5 to each value
test = [0,2,4,6,8]
var addFive = test.map(function(test){
    return test + 5;
})
console.log(addFive)

// Mapping functions 
var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

// Extract cityNames
var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

// Extract cityPopulation
var cityPopulation = cities.map(function(Population){
    return Population.population;
})
console.log(cityPopulation)

// Filter Method
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

//The filter()method operates on each element of the numbers array. So how does it differ from map()?
// The map() method transforms every element of the original array, and so the size of the transformed 
// array is the same as that of the original array.

// Filter to show word that start with letter 's'
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var sWord = words.filter(function(sStarter){
    return sStarter[0] === 's'
})
console.log(sWord)

// Arrow Function
var numbers = [1,2,3,4,5];


var doubled = numbers.map(num => num * 2);
console.log(doubled);

// Arrow sort 
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);

// Slice function
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1)

// Slice first 3 element
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var threeWord = words.slice(0,3);
console.log(threeWord)

// last two element - slice(starting position, [left blank = till the end])
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
console.log(words.slice(3, ));

