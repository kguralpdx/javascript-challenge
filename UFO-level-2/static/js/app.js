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

    // Get the value property of the input elements
    let inputValueDT = inputElementDT.property("value");
    let inputValueCT = inputElementCT.property("value");
    let inputValueST = inputElementST.property("value");

    console.log(inputValueDT);
    console.log(inputValueCT);
    console.log(inputValueST);
    console.log(tableData);

    // Use the form input to filter the data by date
   // let filteredData = tableData.filter(sighting => sighting.datetime === inputValueDT);

   // console.log(filteredData);

    //var table, tr, td, i, txtValue//, tddate, tdcity, tdstate;
    var table = document.getElementById("ufo-table");
    var tr = table.getElementsByTagName("tr");
 
     // Loop through all table rows, and hide those that don't match the search query
    for (i = 1; i < tr.length; i++) {
        var tddate = tr[i].getElementsByTagName("td")[0];
        var tdcity = tr[i].getElementsByTagName("td")[1]; 
        var tdstate = tr[i].getElementsByTagName("td")[2];
        var dateValue = tddate.textContent || tddate.innerText;
        var cityValue = tdcity.textContent || tdcity.innerText;
        var stateValue = tdstate.textContent || tdstate.innerText;

        if (dateValue.indexOf(inputValueDT) > -1  && cityValue.indexOf(inputValueCT) > -1 && stateValue.indexOf(inputValueST) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }      
        // var tddate = tr[i].getElementsByTagName("td")[0];   //date column
        // tdcity = tr[i].getElementsByTagName("td")[1];   //city column
        // tdstate = tr[i].getElementsByTagName("td")[2];  //state column
        // if (tddate) {
        //     txtValue = tddate.textContent || tddate.innerText;
        //     console.log(txtValue);
        //     console.log(txtValue.indexOf(inputValueDT));
        // }
        // if (tdcity) {
        //     cityValue = tdcity.textContent || tdcity.innerText;
        // }
        // if (tdstate) {
        //     stateValue = tdstate.textContent || tdstate.innerText;
        // }

        // console.log(txtValue);
        // console.log(txtValue.indexOf(inputValueDT));
        // if (txtValue.indexOf(inputValueDT) > -1) {
        //     tr[i].style.display = "";
        // } else {
        //     tr[i].style.display = "none";
        // }
        
    }


    // for (var i = 0; i < tr.length; i++) {
    //     var firstCol = tds[0].textContent.toUpperCase();
    //     var secondCol = tds[1].textContent.toUpperCase();
    //     if (firstCol.indexOf(filter) > -1 || secondCol.indexOf(filter) > -1) {
    //         tr[i].style.display = "";
    //     } else {
    //         tr[i].style.display = "none";
    //     }      
    // }

    // // Loop through all table rows, and hide those that don't match the search query
    // for (i = 0; i < tr.length; i++) {
    //     td = tr[i].getElementsByTagName("td")[0];
    //     if (td) {
    //         txtValue = td.textContent || td.innerText;
    //         if (txtValue.indexOf(inputValue) > -1) {
    //             tr[i].style.display = "";
    //         } else {
    //             tr[i].style.display = "none";
    //         }
    //     }
    // }





}



// // The click handler for the form
// filterufo.on("click", function() {

//     // Prevent the page from refreshing
//     d3.event.preventDefault();

//     // Select the input element and get the raw HTML node
//     var inputElement = d3.select("datetime-input"); 

//     // Get the value property of the input element
//     var inputValue = inputElement.property("value");

//     console.log(inputValue);
//     console.log(tableData);




// });



// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);
