// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// console.log(tableData);

// Loop through the data to get an object for each ufo data record
// tableData.forEach(function(ufo) {
//     console.log(ufo);
//     var row = tbody.append("tr");

//     Object.entries(ufo).forEach(function([key, value]) {
//         console.log(key,value);

//         // Append 1 cell for each ufo value (date, city, state, country, shape, duration, and comment )
//         var cell = tbody.append("td");

//         // Add the ufo data to the table
//         cell.text(value);
//     });
    
// });

tableData.forEach((ufo) => {
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(([key, value]) => {

        // Append 1 cell for each ufo value (date, city, state, country, shape, duration, and comment )
        var cell = tbody.append("td");

        // Add the ufo data to the table
        cell.text(value);
    }); 
});
