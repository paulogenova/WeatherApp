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
            $("#temperature").html(temp + " Kelvin");
            $("#description").html(description);
            $("#humidity").html(humidity + "%");

            //conversion of units from K to C/F

            var degC = (parseFloat($("#temperature").text()) - 273.15).toFixed(2);

            $("#degC").click(function () {
                return $("#temperature").html(degC + " &deg;C");
            });

            $("#degF").click(function () {
                var degF = ((degC * 1.8) + 32).toFixed(2);
                $("#temperature").html(degF + " &deg;F");
            });

        };

        var leadingtext = 'Current weather in ' + '<span>' + cityName + '</span>' + ' is as follows:'

        $('.leading-text').html(leadingtext);;

        $('h3, h4').addClass('animated fadeInUp');

    });
});
