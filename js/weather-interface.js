let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=Imperial&appid=${apiKey}`).then(function(response) {
        $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
        $('.showTemp').text(`The temperature in Fahrenheit is ${response.main.temp} degrees.`);
      }).fail(function(error) {
        $('.errors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
