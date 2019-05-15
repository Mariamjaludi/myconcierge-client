import React from 'react';
import logo from './logo.svg';
import './App.css';

const HOTEL_API = 'http://localhost:3000/hotels'
const GUEST_API = 'http://localhost:3000/guests'
export default class App extends React.Component {

  state = {
    hotels: [],
    guests: []
  }

  componentDidMount(){
    fetch(HOTEL_API)
      .then(resp => resp.json())
      .then(hotels => this.setState({hotels}))

      fetch(GUEST_API)
        .then(resp => resp.json())
        .then(guests => this.setState({guests}))
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
