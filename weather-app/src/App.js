import React, { Component } from 'react';
import './App.css';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = '4f6f72308473314b6727d9fb36b07e22';

class App extends Component {
  getWeather = async (e)=> {
    e.preventDefault();
    // call api, convert it to JSON, save that in variable 'data'
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
