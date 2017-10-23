$(document).ready(function () {

    $("button").click(function () {
        var cityName = $("#cityName").val();
        var API = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=e8be76856cd948621c9dd5eea22dba9c";

        //call JSON

        $.getJSON(API, sendWeather);

        function sendWeather(weather) {
            var temp = weather.main.temp;
            var description = weather.weather[0].description;
            var humidity = weather.main.humidity;
            var tempC = (temp - 273.15).toFixed(2);
            $("#temperature").html(tempC + " Celsius");
            $("#description").html(description);
            $("#humidity").html(humidity + "%");

            //conversion of units from C<->F upon click

       /*     var degC = (parseFloat($("#temperature").text()) - 273.15).toFixed(2);*/

            $("#degC").click(function () {
                return $("#temperature").html(tempC + " &deg;C");
            });

            $("#degF").click(function () {
                var degF = ((tempC * 1.8) + 32).toFixed(2);
                $("#temperature").html(degF + " &deg;F");
            });

        };
        
        //lead-in statement upon city name input

        var leadingtext = 'Current weather in ' + '<span>' + cityName + '</span>' + ' is as follows:'

        $('.leading-text').html(leadingtext);;

        $('h3, h4').addClass('animated fadeInUp');
        
    });
    
    $("input").keydown(function(event){
        if(event.keyCode == 13){
            $("button").click();
        }
    });
});
