import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component{

  renderWeather(cityData){
    const name= cityData.city.name;
    const temperature= cityData.list.map(weather => weather.main.temp);
    const pressures= cityData.list.map(weather => weather.main.pressure);
    const humidities= cityData.list.map(weather => weather.main.humidity);
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    const { lon,lat } = cityData.city.coord;
    return(
      <tr key ={name}>
      <td ><GoogleMap lon={lon} lat={lat}/></td>
      <td ><Chart data={temperature} color="orange" units="K" /></td>
      <td ><Chart data={pressures} color="Magenta" units="hPa"/></td>
      <td ><Chart data={humidities} color="blue" units="%"/></td>

      </tr>
    );
  }
  render(){
    return(
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidtiy</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}
function mapStateToProps({weather}) {
  return {weather};
}
export default connect(mapStateToProps)(WeatherList);
