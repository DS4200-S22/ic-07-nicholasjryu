/*

In-class activity 08 starter code
Prof. Mosca 
Modified: 12/08/21 

*/

// Build your scatterplot in this file 


let svg3 = d3 
    .select("csv-scatter")
    .append("svg")
    .attr("class", "holder");

d3.csv("data/scatter.csv").then((data) => { 


    svg3.selectAll("#csv-scatter") 
          .data(data) // this is passed into the anonymous function
          .enter()
          .append("svg")
            .attr("day", (d) => { return d.x; }) // use x for cx
            .attr("score", (d) => { return d.y; }) // use y for cy

    let maxX3 = d3.max(data3, (d) => { return d.day; });
    console.log("Max x: ", + maxX3)

    let maxY3 = d3.max(data3, (d) => { return d.score; });
    console.log("Max y: ", + maxY3)

    let xScale = d3.scaleLinear()
                .domain([0, maxX3])
                .range([margin.left, width - margin.right])

    let yScale = d3.scaleLinear()
                .domain([0, maxY3])
                .range([height - margin.bottom, margin.top])


});





