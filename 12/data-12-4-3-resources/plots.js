function init(){
    var selector = d3.select("#selDataset")

    d3.json("samples.json").then((data) => {
        console.log(data)
        var sampleNames = data.names
        sampleNames.forEach((sample) => {
            selector
                .append("option")
                .text(sample)
                .property("value", sample);
        });
    })
};

init()

function optionChanged(newSample) {
    buildMetadata(newSample);
    // buildCharts(newSample);
  }

function buildMetadata(sample){
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var results = resultArray[0]
        var PANEL = d3.select("#sample-metadata");
        Object.entries(results).forEach(([key, value]) => {
            var result = (key + ': '+ value)
            console.log(result)
            PANEL
                .html("")
                .append("h6")
                .text(result)
                .text(result)
                .property("value", result);
            });

    }
)}