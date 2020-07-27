// Creating a variable from the UFO dataset data.js
var tableData = data;
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the UFO dataset from data.js
console.log(data);

// Loop through data and append rows to the table body
tableData.forEach(function(ufo){
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(function([key,value]){
        var cell = row.append("td").text(value);
    });
});

// select the button and create function 
var button = d3.select("#filter-btn");

button.on("click", function(){
    // Select the input element and get the html node
    var inputElement = d3.select(".form-control");
    // Find the value of the input
    var inputDate = inputElement.property("value");
    //console.log(inputDate)
    // Filter data
    var filteredData = tableData.filter(ufo => ufo.datetime === inputDate);
    //console.log(filteredData);

    // Select table body
    var tbody = d3.select("tbody")
    // Insert selected date values
    tbody.html("");

    // Loop through filtered data to insert data for each object
    filteredData.forEach(function(ufo){
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});