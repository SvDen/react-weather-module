var React = require('react');
var SearchBar = require('./SearchBar.jsx');
var CurrentWeather = require('./CurrentWeather.jsx');
var fetch = require('node-fetch');

let w = {
    "coord": {
        "lon": 30.5,
        "lat": 50.45
    },
    "weather": [
        {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 4.66,
        "pressure": 1013,
        "humidity": 86,
        "temp_min": 4,
        "temp_max": 5
    },
    "visibility": 10000,
    "wind": {
        "speed": 3,
        "deg": 230
    },
    "clouds": {
        "all": 75
    },
    "dt": 1478610000,
    "sys": {
        "type": 1,
        "id": 7358,
        "message": 0.0061,
        "country": "UA",
        "sunrise": 1478581299,
        "sunset": 1478614874
    },
    "id": 696050,
    "name": "Pushcha-Voditsa",
    "cod": 200
};

var List = React.createClass({
    getInitialState() {
        return {
            weather: w
        }
    },

    searchHandler(city) {
        let url = 'http://api.openweathermap.org/data/2.5/weather',
            params = {
                q: city,
                APIkey: '4e3bca4ad0617d3f62f95e67e9adae03',
                units: 'metric'
            };

        var query = '?' + Object.keys(params)
                .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                .join('&');

        fetch(url + query, params)
            .then(res => res.json())
            .then(res => this.setState({weather: res}))
            .catch(error => console.error(error))
    },

    render: function () {
        return (<section>
            <div className="head-container">
                <SearchBar weather={this.state.weather} searchHandler={this.searchHandler}/>
                <CurrentWeather weather={this.state.weather}/>
            </div>
            <ul>

            </ul>
        </section>)
    }
});

module.exports = List;
