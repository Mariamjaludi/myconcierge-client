import React from "react";

import { Route, Switch, withRouter } from "react-router-dom";
import api from './api'

import "./App.css";

import HomeScreen from "./components/HomeScreen";
import LoginScreen from "./containers/LoginScreen";
import GuestHomeScreen from "./containers/GuestHomeScreen";

class App extends React.Component {
  state = {
    hotels: [],
    guest: null,
    homeScreenClick: false,
    logged_in: false
  };

  componentDidMount () {
    const token = localStorage.getItem("token")
    if (token) {
      api.getCurrentGuest(token)
        .then(guest =>
          this.setState({logged_in: true, guest: guest.guest}))

    }
    api.getHotels()
      .then(hotels => this.setState({ hotels }));
  }

  findGuest = (guest_name, password) => {
    return api.login(guest_name, password)
      .then(data => {
        if (data.error) {
          alert(data.error)
        }
        else {
          localStorage.setItem('token', data.jwt)
            this.setState({
              logged_in: true,
              guest: data.guest
            }, () => this.props.history.push('/guest'))
        }
      })
  };

  logOut = () => {
    localStorage.removeItem("token")
    this.setState({
      logged_in: false,
      guest: null
    }, this.props.history.push('/'))
  }

  handleHomeScreenClick = () => {
    this.setState({ homeScreenClick: true });
  };

  getHotelName = () => {
    let hotel = this.state.hotels[0];
    if (hotel) {
      return hotel.hotel_name;
    } else {
      return "Hotel Name";
    }
  };

  render() {
    const { guest, hotels, logged_in } = this.state;
    const { findGuest, handleHomeScreenClick, getHotelName, logOut } = this;
    // debugger
    return (
      <div className="App">
        <Switch>
          <Route
            path="/guest"
            render={routerProps => (
              <GuestHomeScreen
                {...routerProps}
                getHotelName={getHotelName}
                hotel={hotels[0]}
                guest={guest}
                logged_in={logged_in}
                logOut={logOut}
              />
            )}
          />

          <Route
            exact
            path="/"
            render={routerProps => (
              <HomeScreen
                {...routerProps}
                hotel={hotels[0]}
                getHotelName={getHotelName}
                handleClick={handleHomeScreenClick}
              />
            )}
          />
          <Route
            exact
            path="/login"
            component={routerProps => (
              <LoginScreen
                {...routerProps}
                hotel={hotels[0]}
                getHotelName={getHotelName}
                findGuest={findGuest}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App)
