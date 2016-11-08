var React = require('react');

var CurrentWeather = React.createClass({
    render: function () {
        let date = new Date(this.props.weather.dt * 1000);
        date = `${date.getHours()}:${('0' + date.getMinutes()).slice(-2)}`;

        let imgSrc = 'http://openweathermap.org/img/w/' + this.props.weather.weather[0].icon + '.png',
            windDir = this.props.weather.wind.deg < 22.5 ? 'North'
                : this.props.weather.wind.deg < 22.5 * 3 ? 'North-East'
                : this.props.weather.wind.deg < 22.5 * 5 ? 'East'
                : this.props.weather.wind.deg < 22.5 * 7 ? 'South-East'
                : this.props.weather.wind.deg < 22.5 * 9 ? 'South'
                : this.props.weather.wind.deg < 22.5 * 11 ? 'South-West'
                : this.props.weather.wind.deg < 22.5 * 13 ? 'West'
                : this.props.weather.wind.deg < 22.5 * 15 ? 'North-West'
                : 'North';

        let arrowRotate = {
            width: '20px',
            height: '20px',
            transform: 'rotate(' + this.props.weather.wind.deg + 'deg)',
            margin: '0 10px'
        }

        return (
            <section className="weather-current">
                <div>{this.props.weather.name},{this.props.weather.sys.country}</div>
                <div>{date}</div>
                <div className="weather-current-temp">
                    <img className="weather-current-temp-icon" src={imgSrc} alt=""/>
                    <div className="weather-current-temp-text">{Math.round(this.props.weather.main.temp)} &deg;C</div>
                </div>
                <div className="weather-current-wind">
                    <div className="weather-current-wind-dir"><img style={arrowRotate} src="./img/arrow.png" alt=""/>{windDir}</div>
                    <div className="weather-current-wind-speed">{this.props.weather.wind.speed} m/s</div>
                </div>
            </section>
        );
    }
});

module.exports = CurrentWeather;
