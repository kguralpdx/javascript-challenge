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

    // Use the form input to filter the data by date
   // let filteredData = tableData.filter(sighting => sighting.datetime === inputValueDT);


    //var table, tr, td, i, txtValue//, tddate, tdcity, tdstate;
    var table = document.getElementById("ufo-table");
    var tr = table.getElementsByTagName("tr");
 
     // Loop through all table rows, and hide those that don't match the search query
    for (i = 1; i < tr.length; i++) {
        var tddate = tr[i].getElementsByTagName("td")[0];       // date
        var tdcity = tr[i].getElementsByTagName("td")[1];       // city
        var tdstate = tr[i].getElementsByTagName("td")[2];      // state
        var tdcountry = tr[i].getElementsByTagName("td")[3];    // country
        var tdshape = tr[i].getElementsByTagName("td")[4];      // shape
        var dateValue = tddate.textContent || tddate.innerText;
        var cityValue = tdcity.textContent || tdcity.innerText;
        var stateValue = tdstate.textContent || tdstate.innerText;
        var countryValue = tdcountry.textContent || tdcountry.innerText;
        var shapeValue = tdshape.textContent || tdshape.innerText;

        // combine all the filters
        if (dateValue.indexOf(inputValueDT) > -1  && cityValue.indexOf(inputValueCT) > -1 && stateValue.indexOf(inputValueST) > -1 && countryValue.indexOf(inputValueCO) > -1 && shapeValue.indexOf(inputValueSH) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        };    
    };
};


// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);
