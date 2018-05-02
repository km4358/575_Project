/* JS by Kerry C. McAlister, 2018 */

//self-executing anonymous function
(function () {
    //simple csv array
    //var attrArray = ["Severe Storms","Hurricanes","Earthquakes","Fires","Floods","Landslides","Other Disasters","Ice Storms","Tornadoes","Typhoons"];
    
    // variables that will be joined   
    var attrArray = ["severestorms_2002","severestorms_2003","severestorms_2004","severestorms_2005","severestorms_2006","severestorms_2007","severestorms_2008",
    "severestorms_2009","severestorms_2010","severestorms_2011","severestorms_2012","severestorms_2013","severestorms_2014","severestorms_2015","severestorms_2016",
    "severestorms_2017","severestorms_2018","hurricane_2002","hurricane_2003","hurricane_2004","hurricane_2005","hurricane_2006","hurricane_2007","hurricane_2008",
    "hurricane_2009","hurricane_2010","hurricane_2011","hurricane_2012","hurricane_2013","hurricane_2014","hurricane_2015","hurricane_2016","hurricane_2017","hurricane_2018",
    "earthquake_2002","earthquake_2003","earthquake_2004","earthquake_2005","earthquake_2006","earthquake_2007","earthquake_2008","earthquake_2009","earthquake_2010",
    "earthquake_2011","earthquake_2012","earthquake_2013","earthquake_2014","earthquake_2015","earthquake_2016","earthquake_2017","earthquake_2018","fire_2002","fire_2003",
    "fire_2004","fire_2005","fire_2006","fire_2007","fire_2008","fire_2009","fire_2010","fire_2011","fire_2012","fire_2013","fire_2014","fire_2015","fire_2016","fire_2017",
    "fire_2018","flood_2002","flood_2003","flood_2004","flood_2005","flood_2006","flood_2007","flood_2008","flood_2009","flood_2010","flood_2011","flood_2012","flood_2013",
    "flood_2014","flood_2015","flood_2016","flood_2017","flood_2018","landslide_2002","landslide_2003","landslide_2004","landslide_2005","landslide_2006","landslide_2007",
    "landslide_2008","landslide_2009","landslide_2010","landslide_2011","landslide_2012","landslide_2013","landslide_2014","landslide_2015","landslide_2016","landslide_2017",
    "landslide_2018","other_2002","other_2003","other_2004","other_2005","other_2006","other_2007","other_2008","other_2009","other_2010","other_2011","other_2012",
    "other_2013","other_2014","other_2015","other_2016","other_2017","other_2018","ice_2002","ice_2003","ice_2004","ice_2005","ice_2006","ice_2007","ice_2008","ice_2009",
    "ice_2010","ice_2011","ice_2012","ice_2013","ice_2014","ice_2015","ice_2016","ice_2017","ice_2018","tornado_2002","tornado_2003","tornado_2004","tornado_2005","tornado_2006",
    "tornado_2007","tornado_2008","tornado_2009","tornado_2010","tornado_2011","tornado_2012","tornado_2013","tornado_2014","tornado_2015","tornado_2016","tornado_2017","tornado_2018",
    "typhoon_2002","typhoon_2003","typhoon_2004","typhoon_2005","typhoon_2006","typhoon_2007","typhoon_2008","typhoon_2009","typhoon_2010","typhoon_2011","typhoon_2012",
    "typhoon_2013","typhoon_2014","typhoon_2015","typhoon_2016","typhoon_2017","typhoon_2018"];

    var disasterType = [];
    var years = [];

    for (var i = 0; i < attrArray.length; i++) {
        var split = attrArray[i].split("_");
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

    var uniqueDisaster = {earthquake:  "Earthquakes", fire: "Fires", flood: "Floods", hurricane: "Hurricanes", landslide: "Landslides", other: "Other Disasters",
    ice: "Ice Storms", severestorms: "Severe Storms", tornado: "Tornadoes", typhoon: "Typhoons", severestorms: "Severe Storms"};

    console.log(uniqueDisaster);

    /*var severesStorms = ["severestorms_2002","severestorms_2003","severestorms_2004","severestorms_2005","severestorms_2006","severestorms_2007","severestorms_2008",
    "severestorms_2009","severestorms_2010","severestorms_2011","severestorms_2012","severestorms_2013","severestorms_2014","severestorms_2015","severestorms_2016",
    "severestorms_2017","severestorms_2018"];*/

    /*var hurricane = ["hurricane_2002","hurricane_2003","hurricane_2004","hurricane_2005","hurricane_2006","hurricane_2007","hurricane_2008",
    "hurricane_2009","hurricane_2010","hurricane_2011","hurricane_2012","hurricane_2013","hurricane_2014","hurricane_2015","hurricane_2016","hurricane_2017","hurricane_2018"];*/

   /*  var earthquake = ["earthquake_2002","earthquake_2003","earthquake_2004","earthquake_2005","earthquake_2006","earthquake_2007","earthquake_2008","earthquake_2009","earthquake_2010",
    "earthquake_2011","earthquake_2012","earthquake_2013","earthquake_2014","earthquake_2015","earthquake_2016","earthquake_2017","earthquake_2018"]; */

   

   /*  var fire = ["fire_2002","fire_2003",
    "fire_2004","fire_2005","fire_2006","fire_2007","fire_2008","fire_2009","fire_2010","fire_2011","fire_2012","fire_2013","fire_2014","fire_2015","fire_2016","fire_2017",
    "fire_2018"];
 */
   

    /* var flood = ["flood_2002","flood_2003","flood_2004","flood_2005","flood_2006","flood_2007","flood_2008","flood_2009","flood_2010","flood_2011","flood_2012","flood_2013",
    "flood_2014","flood_2015","flood_2016","flood_2017","flood_2018"]; */

   

    /* var landslide = ["landslide_2002","landslide_2003","landslide_2004","landslide_2005","landslide_2006","landslide_2007",
    "landslide_2008","landslide_2009","landslide_2010","landslide_2011","landslide_2012","landslide_2013","landslide_2014","landslide_2015","landslide_2016","landslide_2017",
    "landslide_2018"];
 */
    

    /* var other = ["other_2002","other_2003","other_2004","other_2005","other_2006","other_2007","other_2008","other_2009","other_2010","other_2011","other_2012",
    "other_2013","other_2014","other_2015","other_2016","other_2017","other_2018"];
 */
    

    /* var ice = ["ice_2002","ice_2003","ice_2004","ice_2005","ice_2006","ice_2007","ice_2008","ice_2009",
    "ice_2010","ice_2011","ice_2012","ice_2013","ice_2014","ice_2015","ice_2016","ice_2017","ice_2018"];
 */
    

    /* var tornado = ["tornado_2002","tornado_2003","tornado_2004","tornado_2005","tornado_2006",
    "tornado_2007","tornado_2008","tornado_2009","tornado_2010","tornado_2011","tornado_2012","tornado_2013","tornado_2014","tornado_2015","tornado_2016","tornado_2017","tornado_2018"]; */

    

    /* var typhoon = ["typhoon_2002","typhoon_2003","typhoon_2004","typhoon_2005","typhoon_2006","typhoon_2007","typhoon_2008","typhoon_2009","typhoon_2010","typhoon_2011","typhoon_2012",
    "typhoon_2013","typhoon_2014","typhoon_2015","typhoon_2016","typhoon_2017","typhoon_2018"]; */

   

    //var disasterArray = [earthquake, fire, flood, hurricane, landslide, other, ice, severesStorms, tornado, typhoon];

    //var years = ["2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"];

    var expressed = uniqueDisaster[0];
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
            .data(uniqueDisaster)
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
            .text("Number of " + expressed + " Declared (2002-2018)"); 
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
                    "</h2><b>" + "Total " + expressed + " Declared: " + props[expressed] + "</b>";
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


