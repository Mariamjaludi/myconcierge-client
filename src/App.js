import React from "react";
// import ReactDOM from 'react-dom';
import { Route, Switch, Redirect } from 'react-router-dom'
import "./App.css";

// import Header from './components/Header'
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
    const { guest, hotels } = this.state;
    const { findGuest, handleHomeScreenClick, getHotelName } = this;
    if (guest)
    {
      return <GuestHomeScreen getHotelName={getHotelName} hotel={hotels[0]} guest={guest} />;
    } else {
      return (
        <React.Fragment>
          <Switch>
            <Route exact path='/' render={ routerProps => <HomeScreen {...routerProps} hotel={hotels[0]} getHotelName={getHotelName}  handleClick={handleHomeScreenClick} />} />
            <Route exact path='/login' exact component={routerProps => <LoginScreen {...routerProps} hotel={hotels[0]} getHotelName={getHotelName} findGuest={findGuest} />} />
            <Redirect to="/login" />
          </Switch>
        </React.Fragment>
      )
    }
  }
    //
    // if (!guest) {
    //   if (!homeScreenClick) {
    //     return <HomeScreen hotel={hotels[0]} getHotelName={getHotelName}  handleClick={handleHomeScreenClick} />;
    //   } else {
    //     return <LoginScreen hotel={hotels[0]} getHotelName={getHotelName} findGuest={findGuest} />;
    //   }
    // } else {
    //   return <GuestHomeScreen getHotelName={getHotelName} hotel={hotels[0]} guest={guest} />;
    // }
  // };

  getHotelName = () => {
    let hotel = this.state.hotels[0];
    if (hotel){
      return hotel.hotel_name
    }
    else {
      return "Hotel Name"
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderFunction()}
      </div>
    )
  }
}
