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

    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#datetime-input");

    // Get the value property of the input element
    let inputValue = inputElement.property("value");

    // Use the form input to filter the data by date
    let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // Clear out the table rows
    tbody.html("");

    // Loop through the data to get an object for each filtered ufo data record
    filteredData.forEach((filterDate) => {
        var row = tbody.append("tr");

        Object.entries(filterDate).forEach(([key, value]) => {

            // Append 1 cell for each ufo value (date, city, state, country, shape, duration, and comment )
            var cell = row.append("td");

            // Add the newly filtered data to the table
            cell.text(value);

        }); 
    });
};

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
