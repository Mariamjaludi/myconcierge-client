import React from "react";
import "./App.css";

import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./containers/LoginScreen";
import GuestHomeScreen from "./containers/GuestHomeScreen";

const HOTEL_API = "http://localhost:3000/hotels";
const LOGIN = "http://localhost:3000/login";
export default class App extends React.Component {
  state = {
    hotels: [],
    guest: null,
    homeScreenClick: false
  };

  componentDidMount() {
    fetch(HOTEL_API)
      .then(resp => resp.json())
      .then(hotels => this.setState({ hotels }));
  }

  findGuest = (guest_name, hotel_booking_id) => {
    fetch(LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        guest_name: guest_name,
        hotel_booking_id: hotel_booking_id
      })
    })
      .then(resp => resp.json())
      .then(guest => this.setState({ guest }));
  };

  handleHomeScreenClick = () => {
    this.setState({ homeScreenClick: true });
  };

  renderFunction = () => {
    const { homeScreenClick, guest, hotels } = this.state;
    const { findGuest, handleHomeScreenClick } = this;
    if (!guest) {
      if (!homeScreenClick) {
        return <HomeScreen handleClick={handleHomeScreenClick} />;
      } else {
        return <LoginScreen findGuest={findGuest} />;
      }
    } else {
      return <GuestHomeScreen hotel={hotels[0]} guest={guest} />;
    }
  };

  render() {
    return <div className="App">{this.renderFunction()}</div>;
  }
}
