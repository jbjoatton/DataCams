d3.json("https://download.data.grandlyon.com/ws/rdata/pvo_patrimoine_voirie.pvocameracriter/all.json", function(json) {
  var div = d3.select("#list-webcams")
        .selectAll("div")
        .data(json.values)
        .enter()
        .append("div");

  div.append("img")
        .attr("title",function(d){return d.last_update})
        .attr("src", function (d) {return d.url});

  var p = div.append("p")
        .text(function(d){
            return d.libellelong});

  p.append("span")
        .text(function(d){
          return d.last_update});

});
