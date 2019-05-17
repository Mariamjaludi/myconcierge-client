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
        .then( guest => this.setState( {guest} ) )
  }

  renderFunction = () => {

  }

  render () {
    return (
      <div className="App">
        {this.renderFunction()}
      </div>
    );
  }
}
