{"filter":false,"title":"weather.js","tooltip":"/weather.js","undoManager":{"mark":1,"position":1,"stack":[[{"start":{"row":0,"column":0},"end":{"row":17,"column":0},"action":"insert","lines":["function myWeather() {","    $(\"#getWeather\").html(\"\");","    var cityName = $(\"#cityName\").val();","","    var apiCall = \"https://api.openweathermap.org/data/2.5/weather?q=\" + cityName + \"&appid=f21c6b7c8c4e53536dd3c21d3c610573&units=metric\";","","    $.getJSON(apiCall, weatherCallback);","","    function weatherCallback(weatherData) {","        var cityName = weatherData.name;","        var country = weatherData.sys.country;","        var temp = weatherData.main.temp;","        var description = weatherData.weather[0].description;","        console.log(weatherData.name, weatherData.sys.country, weatherData.main.temp, weatherData.weather[0].description);","        $('#getWeather').append(cityName + \" \" + country + \" \" + temp + \"ºC\" + \" \" + description);","    }","};",""],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":17,"column":0},"action":"remove","lines":["function myWeather() {","    $(\"#getWeather\").html(\"\");","    var cityName = $(\"#cityName\").val();","","    var apiCall = \"https://api.openweathermap.org/data/2.5/weather?q=\" + cityName + \"&appid=f21c6b7c8c4e53536dd3c21d3c610573&units=metric\";","","    $.getJSON(apiCall, weatherCallback);","","    function weatherCallback(weatherData) {","        var cityName = weatherData.name;","        var country = weatherData.sys.country;","        var temp = weatherData.main.temp;","        var description = weatherData.weather[0].description;","        console.log(weatherData.name, weatherData.sys.country, weatherData.main.temp, weatherData.weather[0].description);","        $('#getWeather').append(cityName + \" \" + country + \" \" + temp + \"ºC\" + \" \" + description);","    }","};",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":16,"column":2},"action":"insert","lines":["function myWeather() {","    $(\"#getWeather\").html(\"\");","    var cityName = $(\"#cityName\").val();","","    var apiCall = \"https://api.openweathermap.org/data/2.5/weather?q=\" + cityName + \"&appid=f21c6b7c8c4e53536dd3c21d3c610573&units=metric\";","","    $.getJSON(apiCall, weatherCallback);","","    function weatherCallback(weatherData) {","        var cityName = weatherData.name;","        var country = weatherData.sys.country;","        var temp = weatherData.main.temp;","        var description = weatherData.weather[0].description;","        console.log(weatherData.name, weatherData.sys.country, weatherData.main.temp, weatherData.weather[0].description);","        $('#getWeather').append(cityName + \" \" + country + \" \" + temp + \"ºC\" + \" \" + description);","    }","};"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":16,"column":2},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1574192844394,"hash":"152fec9e8b94f27e7d9b4ec779ef60ca57c5092f"}