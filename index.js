var city_name_box;
var language_box;
var language_JSON;

var table_css =

    window.addEventListener('load', function () {

        city_name_box = document.querySelector("#input_city_name");
        language_box = document.querySelector("#language_box");

        var xhr = new XMLHttpRequest();
        xhr.open('GET', './support/languages.json', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                language_JSON = JSON.parse(xhr.responseText);
                var language_item = "";
                for (var key in language_JSON) {
                    language_item = language_item + `\n <option>${key}</option>`;
                }
                document.querySelector("#language_box").innerHTML = language_item;
                document.querySelector("#language_box").value = 'English';
            }
        };
        xhr.send();
    });

function user_requested() {
    var city_name = city_name_box.value.trim();
    if (city_name.length == 0) {
        city_name_box.value = "";
        return;
    }
    prepare_request(city_name, language_JSON[language_box.value]);
}

function add_to_table(data) {
    try {


        document.querySelector("#weather_detail").innerHTML = `<table class="tg">
    <thead>
        <tr>
            <th class="tg-2me3"><span style="color:#FFF;text-align:center;">Name</span></th>
            <th class="tg-io3p" id="location_name">${data["location"]["name"]}</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="tg-iaud">Region</td>
            <td class="tg-io3p" id="region_name">${data["location"]["region"]}</td>
        </tr>
        <tr>
            <td class="tg-iaud">Country</td>
            <td class="tg-41rr" id="country_name">${data["location"]["country"]}</td>
        </tr>
        <tr>
            <td class="tg-iaud">Latitude</td>
            <td class="tg-4erg" id="latitude">${data["location"]["lat"]}</td>
        </tr>
        <tr>
            <td class="tg-iaud">Longitude</td>
            <td class="tg-4erg" id="longitude">${data["location"]["lon"]}</td>
        </tr>
        <tr>
            <td class="tg-iaud">Localtime</td>
            <td class="tg-4erg" id="localtime">${data["location"]["localtime"]}</td>
        </tr>
        <tr>
            <td class="tg-exe4" colspan="2"><span style="font-weight:bold;font-style:italic">Today</span></td>
        </tr>
        <tr>
                <td class="tg-7btt">Date</td>
                <td class="tg-kwiq" id="current_date">${data["forecast"]["forecastday"][0]["date"]}</td>
            </tr>
        <tr>
            <td class="tg-7btt">Weather</td>
            <td class="tg-kwiq" id="current_weather">${data["current"]["condition"]["text"]}</td>
        </tr>
        <tr>
            <td class="tg-7btt">Last Updated on</td>
            <td class="tg-kwiq" id="current_last_updated_on">${data["current"]["last_updated"]}</td>
        </tr>
        <tr>
            <td class="tg-7btt">Temperature(℃)</td>
            <td class="tg-kwiq" id="current_temp_c">${data["current"]["temp_c"]}</td>
        </tr>
        <tr>
            <td class="tg-7btt">Temperature(℉)</td>
            <td class="tg-kwiq" id="current_temp_f">${data["current"]["temp_f"]}</td>
        </tr>
        <tr>
            <td class="tg-7btt">Wind Speed</td>
            <td class="tg-kwiq" id="current_wind_speed">${data["current"]["wind_kph"]}kph</td>
        </tr>
        <tr>
            <td class="tg-7btt">Humidity</td>
            <td class="tg-kwiq" id="current_humidity">${data["current"]["humidity"]}</td>
        </tr>
        <tr>
                <td class="tg-7btt">Sunrise</td>
                <td class="tg-kwiq" id="current_sunrise">${data["forecast"]["forecastday"][0]["astro"]["sunrise"]} </td>
            </tr>
            <tr>
                <td class="tg-7btt">Sunset</td>
                <td class="tg-kwiq" id="current_sunset">${data["forecast"]["forecastday"][0]["astro"]["sunset"]}</td>
            </tr>
        <tr>
            <td class="tg-exe4" colspan="2"><span style="font-weight:bold;font-style:italic">Tomorrow</span></td>
        </tr>
        <tr>
                <td class="tg-7btt">Date</td>
                <td class="tg-kwiq" id="tomorrow_date">${data["forecast"]["forecastday"][1]["date"]}</td>
            </tr>
            <tr>
                <td class="tg-7btt">Weather</td>
                <td class="tg-kwiq" id="tomorrow_weather">${data["forecast"]["forecastday"][1]["day"]["condition"]["text"]}</td>
            </tr>
            <tr>
                <td class="tg-7btt">Temperature(℃)</td>
                <td class="tg-kwiq" id="tomorrow_temp_c">${data["forecast"]["forecastday"][1]["day"]["avgtemp_c"]}</td>
            </tr>
            <tr>
                <td class="tg-7btt">Temperature(℉)</td>
                <td class="tg-kwiq" id="tomorrow_temp_f">${data["forecast"]["forecastday"][1]["day"]["avgtemp_f"]}</td>
            </tr>
            <tr>
                <td class="tg-7btt">Wind Speed</td>
                <td class="tg-kwiq" id="tomorrow_wind_speed">${data["forecast"]["forecastday"][1]["day"]["maxwind_kph"]}kph</td>
            </tr>
            <tr>
                <td class="tg-7btt">Humidity</td>
                <td class="tg-kwiq" id="tomorrow_humidity">${data["forecast"]["forecastday"][1]["day"]["avghumidity"]}</td>
            </tr>
            <tr>
                <td class="tg-7btt">Sunrise</td>
                <td class="tg-kwiq" id="tomorrow_sunrise">${data["forecast"]["forecastday"][1]["astro"]["sunrise"]}</td>
            </tr>
            <tr>
                <td class="tg-7btt">Sunset</td>
                <td class="tg-kwiq" id="tomorrow_sunset">${data["forecast"]["forecastday"][1]["astro"]["sunset"]}</td>
            </tr>
            <tr>
                <td class="tg-azzy" colspan="2">After</td>
            </tr>
            <tr>
                <td class="tg-7btt">Date</td>
                <td class="tg-kwiq" id="after_date">${data["forecast"]["forecastday"][2]["date"]}</td>
            </tr>
            <tr>
                <td class="tg-7btt">Weather</td>
                <td class="tg-kwiq" id="after_weather">${data["forecast"]["forecastday"][2]["day"]["condition"]["text"]}</td>
            </tr>
            <tr>
                <td class="tg-7btt">Temperature(℃)</td>
                <td class="tg-kwiq" id="after_temp_c">${data["forecast"]["forecastday"][2]["day"]["avgtemp_c"]}</td>
            </tr>
            <tr>
                <td class="tg-7btt">Temperature(℉)</td>
                <td class="tg-kwiq" id="after_temp_f">${data["forecast"]["forecastday"][2]["day"]["avgtemp_f"]}</td>
            </tr>
            <tr>
                <td class="tg-7btt">Wind Speed</td>
                <td class="tg-kwiq" id="after_wind_speed">${data["forecast"]["forecastday"][2]["day"]["maxwind_kph"]}kph</td>
            </tr>
            <tr>
                <td class="tg-7btt">Humidity</td>
                <td class="tg-kwiq" id="after_humidity">${data["forecast"]["forecastday"][2]["day"]["avghumidity"]}</td>
            </tr>
            <tr>
                <td class="tg-7btt">Sunrise</td>
                <td class="tg-kwiq" id="after_sunrise">${data["forecast"]["forecastday"][2]["astro"]["sunrise"]}</td>
            </tr>
            <tr>
                <td class="tg-7btt">Sunset</td>
                <td class="tg-kwiq" id="after_sunset">${data["forecast"]["forecastday"][2]["astro"]["sunset"]}</td>
            </tr>
    </tbody>
    </table>`;
    } catch (error) {
        alert("City name not found...\n|> Tip: Make sure to type correct spelling.");
        city_name_box.value="";
    }
}

function prepare_request(city_name, lang) {
    var temp = "";
    temp = (lang == "en") ? "" : ("&lang=" + lang);
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=69f582b551cd4132bda10111231011&q=${city_name}&days=3${temp}`)
        .then(response => response.json())
        .then(data => add_to_table(data));
}