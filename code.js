var array = [];
for (var i = 0; i < 10; i++)
    array[i] = 0;

function fetchSensorValue(url) {
    $.get(url, function(data) {
        var val = $(data).find('h3').text();
        var v = document.getElementById("change");
        v.innerHTML = val;

        // console.log(val);
    });
}


var url = "http://devices.webofthings.io/pi/sensors/temperature/";

for (var i = 0; i < 10; i++)
    setTimeout(fetchSensorValue(url), 1000);

setTimeout(function() {

    for (var i = 0; i < 10; i++) {
        var v = document.getElementById("change");
        array[i] = v.innerHTML;
        // console.log(v.innerHTML);
    }

    testplot = document.getElementById('testplot');

    var layout = {
        title: 'Raspberry Pi: Temperature over Time duration',
        xaxis: {
            title: 'time (in seconds)'
        },
        yaxis: {
            title: 'temperature (in celsius)'
        },
    };

    var data = [{
        x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: array
    }];
    Plotly.plot(testplot, data, layout);
}, 1000);

// console.log(array[i]);
