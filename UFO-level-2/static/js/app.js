// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through the data to get an object for each ufo data record
tableData.forEach((ufo) => {
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(([key, value]) => {

        // Append 1 cell for each ufo value (date, city, state, country, shape, duration, and comment )
        var cell = row.append("td");

        // Add the ufo data to the table
        cell.text(value);
    }); 
});

// Select the Filter UFO Table button
// Select the form
let button = d3.select("#filter-btn"),
    form = d3.select("#form");

// Complete the event handler function for the form
const runEnter = () => {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input elements and get the raw HTML node
    let inputElementDT = d3.select("#datetime-input");
    let inputElementCT = d3.select("#city-input");
    let inputElementST = d3.select("#state-input");
    let inputElementCO = d3.select("#country-input");
    let inputElementSH = d3.select("#shape-input");

    // Get the value property of the input elements
    let inputValueDT = inputElementDT.property("value");
    let inputValueCT = inputElementCT.property("value");
    let inputValueST = inputElementST.property("value");
    let inputValueCO = inputElementCO.property("value");
    let inputValueSH = inputElementSH.property("value");

    // Filter the dataset by each input value, testing for an input value for each of them
    // If there is an input value, filter the curent dataset by that
    // If not, set it to the dataset in the previous if/else statement
    if (inputValueDT) {
        var filteredDate = tableData.filter(sighting => sighting.datetime === inputValueDT);
    } else {
        var filteredDate = tableData
    };

    if (inputValueCT) {
        var filteredCity = filteredDate.filter(sighting => sighting.city === inputValueCT);
    } else {
        var filteredCity = filteredDate
    };

    if (inputValueST) {
        var filteredState = filteredCity.filter(sighting => sighting.state === inputValueST);
    } else {
        var filteredState = filteredCity
    };

    if (inputValueCO) {
        var filteredCountry = filteredState.filter(sighting => sighting.country === inputValueCO);
    } else {
        var filteredCountry = filteredState
    };

    if (inputValueSH) {
        var filteredShape = filteredCountry.filter(sighting => sighting.shape === inputValueSH);
    } else {
        var filteredShape = filteredCountry
    };

    // Clear out the table rows
    tbody.html("");

    // Loop through the data to get an object for each filtered ufo data record
    filteredShape.forEach((filterAll) => {
        var row = tbody.append("tr");

        Object.entries(filterAll).forEach(([key, value]) => {

            // Append 1 cell for each ufo value (date, city, state, country, shape, duration, and comment )
            var cell = row.append("td");

            // Add the newly filtered data to the table
            cell.text(value);

        }); 
    });
};


// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);
