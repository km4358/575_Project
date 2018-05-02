/* JS by Kerry C. McAlister, 2018 */

//self-executing anonymous function
(function () {
    //simple csv array
    //var attrArray = ["Severe Storms","Hurricanes","Earthquakes","Fires","Floods","Landslides","Other Disasters","Ice Storms","Tornadoes","Typhoons"];
    
    // variables that will be joined   
    var attrArray = ["Severe Storms (2002)","Severe Storms (2003)","Severe Storms (2004)","Severe Storms (2005)","Severe Storms (2006)","Severe Storms (2007)","Severe Storms (2008)",
    "Severe Storms (2009)","Severe Storms (2010)","Severe Storms (2011)","Severe Storms (2012)","Severe Storms (2013)","Severe Storms (2014)","Severe Storms (2015)","Severe Storms (2016)",
    "Severe Storms (2017)","Severe Storms (2018)","Hurricanes (2002)","Hurricanes (2003)","Hurricanes (2004)","Hurricanes (2005)","Hurricanes (2006)","Hurricanes (2007)","Hurricanes (2008)",
    "Hurricanes (2009)","Hurricanes (2010)","Hurricanes (2011)","Hurricanes (2012)","Hurricanes (2013)","Hurricanes (2014)","Hurricanes (2015)","Hurricanes (2016)","Hurricanes (2017)","Hurricanes (2018)",
    "Earthquakes (2002)","Earthquakes (2003)","Earthquakes (2004)","Earthquakes (2005)","Earthquakes (2006)","Earthquakes (2007)","Earthquakes (2008)","Earthquakes (2009)","Earthquakes (2010)",
    "Earthquakes (2011)","Earthquakes (2012)","Earthquakes (2013)","Earthquakes (2014)","Earthquakes (2015)","Earthquakes (2016)","Earthquakes (2017)","Earthquakes (2018)","Fires (2002)","Fires (2003)",
    "Fires (2004)","Fires (2005)","Fires (2006)","Fires (2007)","Fires (2008)","Fires (2009)","Fires (2010)","Fires (2011)","Fires (2012)","Fires (2013)","Fires (2014)","Fires (2015)","Fires (2016)","Fires (2017)",
    "Fires (2018)","Floods (2002)","Floods (2003)","Floods (2004)","Floods (2005)","Floods (2006)","Floods (2007)","Floods (2008)","Floods (2009)","Floods (2010)","Floods (2011)","Floods (2012)","Floods (2013)",
    "Floods (2014)","Floods (2015)","Floods (2016)","Floods (2017)","Floods (2018)","Landslides (2002)","Landslides (2003)","Landslides (2004)","Landslides (2005)","Landslides (2006)","Landslides (2007)",
    "Landslides (2008)","Landslides (2009)","Landslides (2010)","Landslides (2011)","Landslides (2012)","Landslides (2013)","Landslides (2014)","Landslides (2015)","Landslides (2016)","Landslides (2017)",
    "Landslides (2018)","Other Disasters (2002)","Other Disasters (2003)","Other Disasters (2004)","Other Disasters (2005)","Other Disasters (2006)","Other Disasters (2007)","Other Disasters (2008)",
    "Other Disasters (2009)","Other Disasters (2010)","Other Disasters (2011)","Other Disasters (2012)", "Other Disasters (2013)","Other Disasters (2014)","Other Disasters (2015)",
    "Other Disasters (2016)","Other Disasters (2017)","Other Disasters (2018)","Ice Storms (2002)","Ice Storms (2003)","Ice Storms (2004)","Ice Storms (2005)","Ice Storms (2006)",
    "Ice Storms (2007)","Ice Storms (2008)","Ice Storms (2009)", "Ice Storms (2010)","Ice Storms (2011)","Ice Storms (2012)","Ice Storms (2013)","Ice Storms (2014)","Ice Storms (2015)",
    "Ice Storms (2016)","Ice Storms (2017)","Ice Storms (2018)","Tornadoes (2002)","Tornadoes (2003)","Tornadoes (2004)","Tornadoes (2005)","Tornadoes (2006)",
    "Tornadoes (2007)","Tornadoes (2008)","Tornadoes (2009)","Tornadoes (2010)","Tornadoes (2011)","Tornadoes (2012)","Tornadoes (2013)","Tornadoes (2014)","Tornadoes (2015)",
    "Tornadoes (2016)","Tornadoes (2017)","Tornadoes (2018)", "Typhoons (2002)","Typhoons (2003)","Typhoons (2004)","Typhoons (2005)","Typhoons (2006)","Typhoons (2007)","Typhoons (2008)",
    "Typhoons (2009)","Typhoons (2010)","Typhoons (2011)","Typhoons (2012)","Typhoons (2013)","Typhoons (2014)","Typhoons (2015)","Typhoons (2016)","Typhoons (2017)","Typhoons (2018)"];

    var disasterType = [];
    var years = [];

    for (var i = 0; i < attrArray.length; i++) {
        var split = attrArray[i].split("(");
        disasterType.push(split[0]);
        years.push(split[1]);
    }

    var uniqueYears = [];
    $.each(years, function(i, el){
        if($.inArray(el, uniqueYears) === -1) uniqueYears.push(el);
    });

    console.log(uniqueYears);

    var uniqueDisaster = [];
    $.each(disasterType, function(i, el){
        if($.inArray(el, uniqueDisaster) === -1) uniqueDisaster.push(el);
    });

    console.log(uniqueDisaster);

    /*var uniqueDisaster = {earthquake:  {disType: "Earthquakes"}, fire: {disType: "Fires"}, flood: {disType: "Floods"}, hurricane: {disType: "Hurricanes"}, landslide: {disType: "Landslides"},
    other: {disType: "Other Disasters"}, ice: {disType: "Ice Storms"}, severestorms: {disType:"Severe Storms"}, tornado: {disType: "Tornadoes"}, typhoon: {disType: "Typhoons"},
    severestorms: {disType: "Severe Storms"}};*/

    console.log(uniqueDisaster);

    var expressed = attrArray[0];
    //var disasterExpressed = uniqueDisaster[0];

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
        .domain([0, 200]);

    //execute map when page loads
    window.onload = setMap();

    //setup choropleth map
    function setMap() {
        
        //create map frame dimensions
        var width = window.innerWidth * 0.5,
            height = 520;

        //create svg container    
        var map = d3.select("body")
            .append("svg")
            .attr("class", "map")
            .attr("width", width)
            .attr("height", height)
            //add zoom and pan functionality to map
            .call(d3.zoom().on("zoom", function () {
                map.attr("transform", d3.event.transform);
            }))
             .append("g");
            
        //determine map projection
        var projection = d3.geoAlbersUsa()
            .scale(950)
            .translate([width / 2, height / 2]);
        
        //create path generator
        var path = d3.geoPath()
            .projection(projection);
        
        //use queue for asynchronous data loading
        d3.queue()
            .defer(d3.csv, "data/disaster_output.csv")
            .defer(d3.json, "data/us_states.topojson")
            
            .await(callback);
        
            
        function callback(error, csvData, state) {

            //call set graticule function
            //setGraticule(map, path);

            //translate topojson data 
            var stateMap = topojson.feature(state, state.objects.us_states).features;

            //join topojson and csv data
            stateMap = joinData(stateMap, csvData);

            //console.log(stateJoin);

            //create color scale
            var colorScale = makeColorScale(csvData);

            //add enumeration units
            setEnumerationUnits(stateMap, map, path, colorScale);

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

    
    function joinData(stateMap, csvData) {
        //loop through csv to collect attributes 
        for (var i = 0; i < csvData.length; i++) {
            var csvDisaster = csvData[i];
            var csvKey = csvDisaster.state;

            for (var a = 0; a < stateMap.length; a++) {
                var geojsonProps = stateMap[a].properties;
                var geojsonKey = geojsonProps.STUSPS;

                if (geojsonKey == csvKey) {

                    attrArray.forEach(function(attr){
                        var val = parseFloat(csvDisaster[attr]);
                        geojsonProps[attr] = val;
                    });
                };
            };
        };
     
        return stateMap;
        
    };

    /*function createSequenceControls(map, csvData){
        //extend sequence controls to circle markers
        var SequenceControl = L.Control.extend({
            geoJsonMarkerOptions: {
                positions: 'topright'
            },
    
    
            //create the div for sequence controls and buttons
            onAdd: function(map) {
                var container = L.DomUtil.create('div', 'sequence-control-container');
    
                $(container).append('<input class="range-slider" type="range">');
    
                $(container).append('<button class="skip" id="reverse">Reverse</button>');
                $(container).append('<button class="skip" id="forward">Forward</button>');
    
                $(container).on('mousedown dblclick pointerdown', function(e){
                    L.DomEvent.stopPropagation(e);
                });
    
                return container
            }
        });
        //add sequnce controls to map
        map.addControl(new SequenceControl());
        //assign intervals to range slider
        $('.range-slider').attr({
            max: 16,
            min: 0,
            value: 0,
            step: 1
        });
    
        $('.range-slider').on
    
         
    
        //assign image files to range slider buttons
        $('#reverse').html('<img src="img/if_arrow-left.png">');
        $('#forward').html('<img src="img/if_arrow-right.png">');
    
        
    
        //determine the action taken when slider buttons clicked
        $('.skip').click(function(){
    
            var index = $('.range-slider').val();
    
            if ($(this).attr('id') == 'forward'){
                index++;
    
                index = index > 16 ? 0: index;
            } else if ($(this).attr('id') == 'reverse'){
                index--;
    
                index = index < 0? 16: index;
            };
    
            $('.range-slider').val(index);
    
                        
        });
        //update symbols and legend when buttons clicked
        $('.range-slider').on('input', function(){
    
            var index = $(this).val();
    
            setEnumerationUnits(map, uniqueDisaster[index]);
            
            
        });
    
    };   */          

    function setEnumerationUnits(stateMap, map, path, colorScale) {
        
        //add countries for analysis to the map
        var disasterStates = map.selectAll(".disasterStates")
            .data(stateMap)
            .enter()
            .append("path")
            .attr("class", function (d) {
                return "disasterState " + d.properties.STUSPS;
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

            var desc = disasterStates.append("desc")
                .text('{"stroke": "#000", "stroke-width": "0.5"}');

            console.log(disasterStates);

    };

    function makeColorScale(data){
        //assign colors
        var colorClasses = [
        "#ffb3b3",
        "#ff8080",
        "#ff1a1a",
        "#cc0000",
        "#990000"
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
        if (typeof val === "number" && !isNaN(val)) {
            return colorScale(val);
        } else {
            return "#FFFF";
        }
    };    

    //create graticule
    /*function setGraticule(map, path) {
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
        
    };*/

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

        //set bars for each state being evalulated
        var bars = chart.selectAll(".bar")
            .data(csvData)
            .enter()
            .append("rect")
            .sort(function(a, b){
                return b[expressed]-a[expressed];
            })
            .attr("class", function (d) {
                return "bar " + d.state;
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
            .attr("class", "chartTitle");

        //create vertical axis generator
        var yAxis = d3.axisLeft()
            .scale(yScale);

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
                changeAttribute(this.value, csvData);
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
        var disasterState = d3.selectAll(".disasterState")
            .transition()
            .duration(1000)
            .style("fill", function (d) {
                return choropleth(d.properties, colorScale);
            });
        
        //re-configure bars 
        var bars = d3.selectAll(".bar")
            //re-sort bars
            .sort(function (a, b) {
                return b[expressed] - a[expressed];
            })
            .transition()
            .delay(function(d, i){
                return i * 20;
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
            .text("Number of Declared " + expressed + "."); 
    };

    function highlight(props, csv){

        //highlight enumeration units and bars
        var selected = d3.selectAll("." + props.STUSPS)
            .style("stroke", "#54278f")
            .style("stroke-width", "3");

            setLabel(props);
    };

    function dehighlight(props) {

        //remove highlighting when mouse leaves enum unit or bar 
        var selected = d3.selectAll("." + props.STUSPS)
            .style("stroke", function () {
                return getStyle(this, "stroke");
            })
            .style("stroke-width", function () {
                return getStyle(this, "stroke-width");
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
        var labelName = props.NAME;
        //var labelParse = labelName.replace(/_/g, ' '); 

        //if statement to specifically add attributes once dropdown menu item is activated 
        var labelAttribute;
        if ([expressed] != expressed) {
            labelAttribute = "<h2>" + labelName +
                "</h2><b>" + "Click dropdown menu to begin viewing disaster figures." + "</b>";

        } else {
            //second if statement to add attribute data only to countries being evaluated 
            if (props[expressed] > 0) {
                labelAttribute = "<h2>" + labelName +
                    "</h2><b>" + "Total Declared " + expressed + " : " + props[expressed] + "</b>";
            } else {
                labelAttribute = "<h2>" + labelName +
                    "</h2><b>" + "No disasters declared for this type." + "</b>";
            };
        };
        //create info label div
        var infolabel = d3.select("body")
            .append("div")
            .attr("class", "infolabel")
            .attr("id", props.NAME + "_label")
            .html(labelAttribute);
    
        /*var stateName = infolabel.append("div")
            .attr("class", "labelname")
            .html(props.NAME);*/
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
