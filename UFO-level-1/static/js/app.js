// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// console.log(tableData);

// Loop through the data to get an object for each ufo data record
tableData.forEach(function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key,value);
    })
    
});
