// shows the ajax weather thing of course
// changes the weather background and image according to time and weather
var timeText = document.querySelector("#time_text");
var weathIcon = document.querySelector("#weather_icon");
var localText = document.querySelector("#local_text");
var now = new Date();
var debug = false;
var clickedTimes = 0;
var day = true;



$(document).ready(() => {
    const getJSONData = () => {
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=6102f4768dc573c373bb433f93931112&units=imperial").done((res) => {
            var min = now.getMinutes();
            if (min < 10) {
                min = "0" + now.getMinutes();
            }

            timeText.innerHTML = now.getHours() + ":" + min + " in " + res.name + ", Texas";
            localText.innerHTML = (Math.round(res.main.temp)) + "F" + ", " + res.weather[0].description;
            var iconurl = "http://openweathermap.org/img/w/" + res.weather[0].icon + ".png";
            weathIcon.setAttribute("src", iconurl);

        })
    }
    getJSONData();


    const calcTimeCycle = () => {
        if (now.getHours() >= 20 || now.getHours() < 7&& debug === false) {
            day = false;
        }
        else {
            day = !day;
        }

            console.log(day);

        var backgWeatherElem = document.querySelector(".weather_container");
        var backgMainElem = document.querySelector(".main_content");

        if (!day) {
            var nightimg = "images/dallas_night.jpg"
            backgWeatherElem.style.background = `url(${nightimg})`;
            backgMainElem.style.background = `url(${nightimg})`;
        }
        else {
            var dayimg = "images/dallas_day.jpg"
            backgWeatherElem.style.background = `url(${dayimg})`;
            backgMainElem.style.background = `url(${dayimg})`;
        }




    }


    calcTimeCycle();


    setInterval(() => 
    {
        getJSONData();
    }, 10000);


    weathIcon.addEventListener("click", function (x) {
        clickedTimes++;
        console.log("clicked");
        if (clickedTimes >= 5) {
            console.log("Debug active");
            debug = true;
            calcTimeCycle();
    
        }
    });
})



