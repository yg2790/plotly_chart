d3.json("samples.json").then(function(data){
    console.log(data);
});

// return all wfreq 
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(people => people.wfreq)
    return console.log(wfreq)
});

// sort wfreq in descending orders 
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(people => people.wfreq).sort((a,b)=> b-a)
    return console.log(wfreq)
});

// filter out empty values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(people => people.wfreq).sort((a,b)=> b-a).filter(people => people != null);
    return console.log(wfreq)
});

//The Object.entries() method allows access to both an object's keys and values. 
// It returns each key-value pair as an array.
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});
