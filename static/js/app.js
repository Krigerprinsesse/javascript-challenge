// from data.js
var tabledata = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");


function buildTable(data) {
    tbody.html("");

    data.forEach((datarow) => {
    var row = tbody.append("tr");


    Object.values(datarow).forEach((val) => {
        var cell = row.append("td");
        cell.text(val);

    }
    );
});
}

function handleclick () {
    var date = d3.select("#datetime").property("value");
    let filter = tabledata;
    if (date) {
        filter = filter.filter(row => row.datetime == date);
    }
    
    buildTable(filter);

}

d3.selectAll("#filter-btn").on("click", handleclick);

buildTable(tabledata);




