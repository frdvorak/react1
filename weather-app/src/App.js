import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import CityTile from './components/CityTile';

const API_KEY = '4f6f72308473314b6727d9fb36b07e22';

class App extends Component {
  state = {
    city: undefined,
    temperature: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e)=> {
    e.preventDefault(e);
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    // call api, convert it to JSON, save that in variable 'data'
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    
    //console.log(data.name)
   
      if (city && country && data.name) { //data.name is incuded so we setState only when we find city in the database
        console.log(data);
        this.setState({
          city: data.name,
          temperature: data.main.temp,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: ""
        });
      } else {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter the city and country"
        })

      }
    
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
        <CityTile />
        <CityTile />
        <CityTile />
        <CityTile />
        <CityTile />
        <CityTile />
        <CityTile />
        <CityTile />
        <CityTile />

      </div>
    );
  }
}

export default App;
