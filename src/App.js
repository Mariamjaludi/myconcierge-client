import React from 'react';
import logo from './logo.svg';
import './App.css';

const HOTEL_API = 'http://localhost:3000/hotels'
const GUEST_API = 'http://localhost:3000/guests'
const LOGIN = 'http://localhost:3000/login'
export default class App extends React.Component {

  state = {
    hotels: [],
    guest: null
  }

  componentDidMount(){
    fetch(HOTEL_API)
      .then(resp => resp.json())
      .then(hotels => this.setState({hotels}))
  }

  findGuest = (name, hotel_booking_id) => {
    fetch(LOGIN ,
      {
          method: 'POST',
          headers: {
                      'Content-Type': 'application/json'
                   },
          body: JSON.stringify({
                      name: name,
                      hotel_booking_id: hotel_booking_id
                })
      })
        .then( resp => resp.json() )
        .then( student => this.setState( {guest} ) )
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
