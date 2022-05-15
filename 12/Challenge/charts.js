function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var sampleData = data.samples;
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var sampleNumber = sampleData.filter(sampleObj => sampleObj.id == sample);
    //  5. Create a variable that holds the first sample in the array.
    var firstResult = sampleNumber[0]
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuId = firstResult.otu_ids;
    var otuLabels = firstResult.otu_labels;
    var sample_values = firstResult.sample_values;

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otuId.slice(0, 10).map(id => "OTU" + id).reverse();
    var top10_otu_labels = otuLabels.slice(0, 10).reverse();
    var top10_sample_values = sample_values.slice(0, 10).reverse();

    // 8. Create the trace for the bar chart. 
    var barData = {
      x: top10_sample_values,
      y: yticks,
      text: top10_otu_labels,
      type: 'bar',
      orientation:'h'
    };

    var trace = [barData]

    // 9. Create thxe layout for the bar chart. 
    var barLayout = {
      title: 'Top 10 Bacteria Cultures Found'
      };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", trace, barLayout)
  

    // Deliverable 2: Bubble Chart
    // Create the buildCharts function.

    // 1. Create the trace for the bubble chart.
    var bubbleData = [{
      x: otuId,
      y: sample_values,
      text: otuLabels,
      mode: "markers",
      marker: {
        size: sample_values,
        color:  otuId
      }
    }];
    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: 'Bacteria Culture Per Sample',
      xaxis: {title: 'OTU ID'}
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    
    // Deliverable 3: Gauge Chart
    // 2. Create a variable that holds the first sample in the metadata array.
    var metadata = data.metadata;
    var filteredMetadata = metadata.filter(sampleObj=> sampleObj.id == sample)
    var firstMetadata = filteredMetadata[0];

    // 3. Create a variable that holds the washing frequency.
    var wfreq_value = firstMetadata.wfreq;

    // 4. Create the trace for the gauge chart.
    var gaugeData = [{
      type: "indicator",
      mode: "gauge+number",
      value: wfreq_value,
      title: {text: 'Belly Button Washing Frequency <br> Scrubs Per Week', font: {size:24}},
      gauge: {
        axis: { 
            range: [0, 10], 
            tickwidth: 1, 
            tickcolor: "black",
            nticks: 6 
        },
        bar: { color: "black" },
        bgcolor: "white",
        borderwidth: 4,
        bordercolor: "gray",
        steps: [
          { range: [0, 2], color: "red"},
          { range: [2, 4], color: "orange" },
          { range: [4, 6], color: "yellow" },
          { range: [6, 8], color: "limegreen" },
          { range: [8, 10], color: "darkgreen" }]},
    }];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = {
      margin: {
        t:0, 
        b:0 
      },
      width:500,
      height:400,
      font: {
        color: "black", 
        family: "Arial" 
      } 
    };
  
    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  });
}
