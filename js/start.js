    var width = $('canvas').parent().width();
    $('canvas').attr("width",width);

    var options = {

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines : false,

    //Boolean - If there is a stroke on each bar
    barShowStroke : false,

    //Number - Spacing between each of the X value sets
    barValueSpacing : 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing : 1,

    inGraphDataShow : true,

    //set lowest value on graph
    graphMin : 0,

    graphTitleFontColor : "#898989",

    graphTitleFontSize : 19,

    thousandSeparator : ","
    }

    // Workaround for redrawing with double values on mobile
    var canvas = document.createElement("canvas");
    $(canvas).attr("width", "900px").attr("height", "220px");
    $("#canvas-holder").children("canvas").replaceWith(canvas);

    //Get the canvas
    var bar= canvas.getContext("2d");

    jQuery(document).ready(function() {

        //loading animation
        var $loading = $('#loader').hide();
        $(document)
          .ajaxStart(function () {
            $loading.show();
          })
          .ajaxStop(function () {
            $loading.hide();
          });

        //Worldwide button
        var worldwide= document.getElementById("worldwide");
        worldwide.onclick = function(){
            options.graphTitle = "Scripture Distribution Goals for 2015";
            var worldData = {
                labels: ["Bibles", "New Testaments", "Scripture Materials"],
                datasets : [
                    {
                        fillColor : "#ccc",
                        data : [995332, 682921, 2674837],
                    }
                ]
            };
            new Chart(bar).HorizontalBar(worldData, options);

            //stop the cycle
            clearInterval(timer);

            //set timer for page refresh
            var time = new Date().getTime();
            $('#vmap').bind("click", function(e) {
                time = new Date().getTime();
            });
            function refresh() {
                if(new Date().getTime() - time >= 10000) 
                    window.location.reload(true);
                else 
                    setTimeout(refresh, 5000);
            }
            setTimeout(refresh, 5000);
        };

        //Map config
        jQuery('#vmap').vectorMap({
            map: 'world_en',
            backgroundColor: '#fff',
            borderColor: '#bbb',
            borderOpacity: 1,
            borderWidth: .1,
            color: '#bbb',
            colors: colored_regions,
            hoverOpacity: 0.6,
            selectedColor: null,
            enableZoom: false,
            showTooltip: false,
            onRegionOver : function (element, code, region)
            {
                highlightRegionOfCountry(code);
            },
            onRegionOut : function (element, code, region)
            {
                unhighlightRegionOfCountry(code);
            },
            onRegionClick: function(element, code, region)
            {

                //set initial animation state for content
                $("#post").hide();

                //Chart request
                $.ajax('get_chart_data.php', {
                    data: {region: region},
                    dataType: 'json',
                    success: function(response) {

                        options.graphTitle = response.title;

                        var data = {
                            labels: ["Bibles", "New Testaments", "Scripture Materials"],
                            datasets: [response.data]
                        };

                        var width = $('canvas').parent().width();
                        $('canvas').attr("width",width);
                        new Chart(bar).HorizontalBar(data, options);

                        //responsiveness
                        window.onresize = function(event){
                            var width = $('canvas').parent().width();
                            $('canvas').attr("width",width);
                            new Chart(bar).HorizontalBar(data, options);
                        };
                    }
                });
            
                //Post request
                $.ajax('get_post_data.php', {
                    data: {region: region},
                    dataType: 'html',
                    success: function(response) {

                        //remove the added "1" from the content
                        var res = response.replace("1", " ");
                        $("#post").html(res);
                        $("#post").fadeIn(1000);
                    }
                });

                //stop the cycle when a user interacts
                if(region != "Vanuatu" && region != "Grenada" && region != "Lebanon" && region != "Mauritius" && region != "Malta"){
                    
                    //stop timer
                    clearInterval(timer);

                    //set timer for page reload
                    var time = new Date().getTime();
                    $('#vmap').bind("click", function(e) {
                        time = new Date().getTime();
                    });

                    function refresh() {
                        if(new Date().getTime() - time >= 10000) 
                            window.location.reload(true);
                        else 
                            setTimeout(refresh, 5000);
                    }

                    setTimeout(refresh, 5000);
                }

            }  
        });

        //load Middle East content on page load
        $('#jqvmap1_lb').click();

        //automatically cycle through each region
        //get each region
        var regionArray = ['#jqvmap1_vu', '#jqvmap1_gd', '#jqvmap1_mu', '#jqvmap1_mt', '#jqvmap1_lb'];
        var arrayLength = regionArray.length;

        //start timer and loop through regions
        var i = 0;
        var timer = setInterval(function(){autoCycle(i++%arrayLength)}, 5000);

        //click region
        function autoCycle(i) {
            jQuery(regionArray[i]).trigger('click');   
        }


        //setInterval(autoCycle, 50000);
        // function autoCycle(){
        //     var i=0;
        //     var int=setInterval(function(){ 
        //         jQuery(regionArray[i++]).click();
        //         if(arrayLength === i){
        //              clearInterval(int);
        //         }
        //     },1000);
        // }

    });











