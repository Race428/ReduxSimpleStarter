import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  constructor(props) {
    super(props);
  }

  renderWeather(cityData){
    const cityName = cityData.city.name;
    const countryName = cityData.city.country;
    const { lon, lat } = cityData.city.coord;

    const temps = cityData.list.map( (weather) => weather.main.temp);
    const pressures = cityData.list.map( (weather) => weather.main.pressure);
    const humidities = cityData.list.map( (weather) => weather.main.humidity);

    return (
      <tr key={`${countryName}: ${cityName}`}>
        <td className="city-name">{cityName}</td>
        <td className="weather-chart"><Chart data={temps} color="orange" units="Kelvin" /></td>
        <td className="weather-chart"><Chart data={pressures} color="green" units="hPa"/></td>
        <td className="weather-chart"><Chart data={humidities} color="black" units="%"/></td>
        <td className="google-map"><GoogleMap lat={lat} lon={lon}/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Kelvin)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%) </th>
            <th>Google Map </th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
  