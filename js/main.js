/* JS by Kerry C. McAlister, 2018 */

//self-executing anonymous function
(function () {

    // variables that will be joined   
    var attrArray = [ "Earthquake", "Fire", "Flood", "Hurricane", "Mud/Landslide", "Other", "Severe Ice Storm", "Severe Storms", "Tornado", "Typhoon"];


    var expressed = attrArray[0];

    //create chart dimensions
    var chartWidth = window.innerWidth * 0.425,
        chartHeight = 473,
        leftPadding = 25,
        rightPadding = 2,
        topBottomPadding = 5,
        chartInnerWidth = chartWidth - leftPadding - rightPadding,
        chartInnerHeight = chartHeight - topBottomPadding * 2,
        translate = "translate(" + leftPadding + "," + topBottomPadding + ")";

    //create a scale to size bars proportionally to frame and for axis
    var yScale = d3.scaleLinear()
        .range([463, 0])
        .domain([0, 60]);

    //execute map when page loads
    window.onload = setMap();

    //setup choropleth map
    function setMap() {
        
        //create map frame dimensions
        var width = window.innerWidth * 0.5,
            height = 700;

        //create svg container    
        var map = d3.select("body")
            .append("svg")
            .attr("class", "map")
            .attr("width", width)
            .attr("height", height)
            //add zoom and pan functionality to map
            .call(d3.zoom().on("zoom", function () {
                map.attr("transform", d3.event.transform)
             }))
             .append("g");
            
        //determine map projection
        var projection = d3.geoAlbers()
            .scale(250)
            .translate([width / 2, height / 2]);
        
        //create path generator
        var path = d3.geoPath()
            .projection(projection);
        
        //use queue for asynchronous data loading
        d3.queue()
            .defer(d3.csv, "data/Disaster_Data_FEMA.csv")
            .defer(d3.json, "data/us_counties.topojson")
            //.defer(d3.json, "data/WWP.topojson")
            .await(callback);
        
            
        function callback(error, csvData, counties) {

            //call set graticule function
            setGraticule(map, path);

            //translate topojson data 
            var us_counties = topojson.feature(counties, counties.objects.us_counties).features;

            //join topojson and csv data
            counties = joinData(counties, csvData);

            //create color scale
            var colorScale = makeColorScale(csvData);

            //add enumeration units
            setEnumerationUnits(counties, map, path, colorScale);

            //add coordinated visualization
            setChart(csvData, colorScale);

            //add dropdown menu
            createDropdown(csvData);
           
            //change attriubute data 
            changeAttribute(csvData, makeColorScale);

            //update charts when data changes
            updateChart(csvData);
            

        };
    };

    
    function joinData(counties, csvData) {
        //loop through csv to collect attributes 
        for (var i = 0; i < csvData.length; i++) {
            var csvDisaster = csvData[i];
            var csvKey = csvDisaster.place_name;

            for (var a = 0; a < counties.length; a++) {
                var geojsonProps = counties[a].properties;
                var geojsonKey = geojsonProps.place_name;

                if (geojsonKey == csvKey) {

                    attrArray.forEach(function(attr){
                        var val = parseFloat(csvDisaster[attr]);
                        geojsonProps[attr] = val;
                    });
                };
            };
        };
     
        return counties;
        
    };

    function setEnumerationUnits(counties, map, path, colorScale) {
        
        //add countries for analysis to the map
        var disasterCounties = map.selectAll(".disasterCounty")
            .data(counties)
            .enter()
            .append("path")
            .attr("class", function (d) {
                return "disasterCounty " + d.properties.place_name;
            })
            .attr("d", path)
            .style("fill", function(d){
                return colorScale(d.properties[expressed]);
            })
            .on("mouseover", function(d){
                highlight(d.properties);
            })
            .on("mouseout", function(d){
                dehighlight(d.properties);
            })
            .on("mousemove", moveLabel);

            var desc = disasterCounties.append("desc")
                .text('{"stroke": "#000", "stroke-width": "0.5"}');

            console.log(disasterCounties);

    };

    function makeColorScale(data){
        //assign colors
        var colorClasses = [
        "#fda79b",
        "#fb5c56",
        "#e83e14",
        "#b21a18",
        "#722f37"
        ];

        //create color generator
        var colorScale = d3.scaleThreshold()
            .range(colorClasses);

        //build array of values
        var domainArray = [];
        for (var i = 0; i < data.length; i++) {
            var val = parseFloat(data[i][expressed])
            domainArray.push(val);
        };
            
        //cluster data using ckmeans clustering algorithm to create natural breaks
        var clusters = ss.ckmeans(domainArray, 5);

        //reset domain array to cluster minimums
        domainArray = clusters.map(function (d) {
            return d3.min(d);
        });

        //remove first value from domain array to create class breakpoints
        domainArray.shift();

        //assign array of last 4 clusters minimum as domain
        colorScale.domain(domainArray);

        
        return colorScale;
    };

    //function to test for data value and return color
    function choropleth(props, colorScale) {
        //make sure attribute value is a number
        var val = parseFloat(props[expressed]);
        //if attribute value exists, assign a color; otherwise assign white
        if (typeof val == "number" && !isNaN(val)) {
            return colorScale(val);
        } else {
            return "#FFFF";
        };
    };    

    //create graticule
    function setGraticule(map, path) {
        var graticule = d3.geoGraticule()
            .step([5, 5]);

        var gratBackground = map.append("path")
            .datum(graticule.outline())
            .attr("class", "gratBackground")
            .attr("d", path)

        var gratlines = map.selectAll(".gratlines")
            .data(graticule.lines())
            .enter()
            .append("path")
            .attr("class", "gratlines")
            .attr("d", path);
        
    };

    function setChart(csvData, colorScale) {
        
        //create another svg container to hold chart 
        var chart = d3.select("body")
            .append("svg")
            .attr("width", chartWidth)
            .attr("height", chartHeight)
            .attr("class", "chart");

        //create rectangle chart container
        var chartBackground = chart.append("rect")
            .attr("class", "chartBackground")
            .attr("width", chartInnerWidth)
            .attr("height", chartInnerHeight)
            .attr("transform", translate);

        //set bars for each county being evalulated
        var bars = chart.selectAll(".bar")
            .data(csvData)
            .enter()
            .append("rect")
            .sort(function(a, b){
                return b[expressed]-a[expressed]
            })
            .attr("class", function (d) {
                return "bar " + d.place_name;
            })
            .attr("width", chartInnerWidth / csvData.length - 1)
            .on("mouseover", highlight)
            .on("mouseout", dehighlight)
            .on("mousemove", moveLabel)
            .attr("x", function (d, i) {
                return i * (chartInnerWidth / csvData.length) + leftPadding;
            })
            .attr("height", function (d, i) {
                return 463-yScale(parseFloat(d[expressed]));
            })
            .attr("y", function (d, i) {
                return yScale(parseFloat(d[expressed])) ;
            })
            .style("fill", function (d) {
                return choropleth(d, colorScale);
            });

        var desc = bars.append("desc")
            .text('{"stroke": "none", "stroke-width": "0px"}');

        //create chart title element
        var chartTitle = chart.append("text")
            .attr("x", 150)
            .attr("y", 40)
            .attr("class", "chartTitle")
           
        //create vertical axis generator
        var yAxis = d3.axisLeft()
            .scale(yScale)
            
        //place axis
        var axis = chart.append("g")
            .attr("class", "axis")
            .attr("transform", translate)
            .call(yAxis);

        //create frame for chart border
        var chartFrame = chart.append("rect")
            .attr("class", "chartFrame")
            .attr("width", chartInnerWidth)
            .attr("height", chartInnerHeight)
            .attr("transform", translate);

        updateChart(bars, csvData.length, colorScale);
    };

    function createDropdown(csvData){
        
        // create dropdown menu element
        var dropdown = d3.select("body")
            .append("select")
            .attr("class", "dropdown")
            .on("change", function(){
                changeAttribute(this.value, csvData)
            });            

        //add initial option
        var titleOption = dropdown.append("option")
            .attr("class", "titleOption")
            .attr("disabled", "true")
            .text("Select Disaster Type");

        //add attribute name options
        var attrOptions = dropdown.selectAll("attrOptions")
            .data(attrArray)
            .enter()
            .append("option")
            .attr("value", function (d) { return d })
            .text(function (d) { return d });
    };

    function changeAttribute(attribute, csvData) {
        //change the expressed attribute
        expressed = attribute;

        //recreate the color scale
        var colorScale = makeColorScale(csvData);

        //recolor enumeration units
        var disasterCounty = d3.selectAll(".disasterCounties")
            .transition()
            .duration(1000)
            .style("fill", function (d) {
                return choropleth(d.properties, colorScale)
            });
        
        //re-configure bars 
        var bars = d3.selectAll(".bar")
            //re-sort bars
            .sort(function (a, b) {
                return b[expressed] - a[expressed];
            })
            .transition()
            .delay(function(d, i){
                return i * 20
            })
            .duration(500);

        updateChart(bars, csvData.length, colorScale);
            
    };

    function updateChart(bars, n, colorScale){
        //position bars
        bars.attr("x", function(d, i){
                return i * (chartInnerWidth / n) + leftPadding;
            })
            //size/resize bars
            .attr("height", function(d, i){
                return 463 - yScale(parseFloat(d[expressed]));
            })
            .attr("y", function(d, i){
                return yScale(parseFloat(d[expressed])) + topBottomPadding;
            })
            //color/recolor bars
            .style("fill", function(d){
                return choropleth(d, colorScale);
            });

        var chartTitle = d3.select(".chartTitle")
            .text("Disaster Type by  " + expressed + "."); 
    };

    function highlight(props){

        //highlight enumeration units and bars
        var selected = d3.selectAll("." + props.place_name)
            .style("stroke", "#54278f")
            .style("stroke-width", "3");

            setLabel(props);
    };

    function dehighlight(props) {

        //remove highlighting when mouse leaves enum unit or bar 
        var selected = d3.selectAll("." + props.place_name)
            .style("stroke", function () {
                return getStyle(this, "stroke")
            })
            .style("stroke-width", function () {
                return getStyle(this, "stroke-width")
            });

        function getStyle(element, styleName) {
            var styleText = d3.select(element)
                .select("desc")
                .text();

            var styleObject = JSON.parse(styleText);

            return styleObject[styleName];
        };

        d3.select(".infolabel")
            .remove();
    };

    function setLabel(props, csvData){
        
        //name attributes filtered to replace underscore with space 
        var labelName = props.place_name;
        var labelParse = labelName.replace(/_/g, ' '); 

        //if statement to specifically add attributes once dropdown menu item is activated 
        if ([expressed] > 0){
            //second if statement to add attribute data only to countries being evaluated 
            if (props[expressed] > 0) {
                var labelAttribute = "<h2>" + labelParse +
                    "</h2><b>" + "Total Disasters in " + expressed + ": " + props[expressed] + " (year?)" + "</b>";
                }
                else{
                    var labelAttribute = "<h2>" + labelParse +
                "</h2><b>" + "No disasters recorded for this year." + "</b>";
                };
        }else{
            var labelAttribute = "<h2>" + labelParse +
                "</h2><b>" + "Click dropdown menu to begin viewing disaster figures." + "</b>";

        };
        //create info label div
        var infolabel = d3.select("body")
            .append("div")
            .attr("class", "infolabel")
            .attr("id", props.place_name + "_label")
            .html(labelAttribute);
    
        var countyName = infolabel.append("div")
            .attr("class", "labelname")
            .html(props.place_name);
    };

    function moveLabel(){

        var labelWidth = d3.select(".infolabel")
            .node()
            .getBoundingClientRect()
            .width;

        //use coordinates of mousemove event to set label coordinates
        var x = d3.event.clientX + 10,
            y = d3.event.clientY - 75;
    
        d3.select(".infolabel")
            .style("left", x + "px")
            .style("top", y + "px");
    };


})();


