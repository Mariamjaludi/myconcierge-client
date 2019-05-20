import React from "react";
// import { Switch, Route, withRouter } from 'react-router-dom'

import "./App.css";

import Header from './components/Header'
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
        return <HomeScreen hotel={hotels[0]} className="home-screen" handleClick={handleHomeScreenClick} />;
      } else {
        return <LoginScreen hotel={hotels[0]} findGuest={findGuest} />;
      }
    } else {
      return <GuestHomeScreen hotel={hotels[0]} guest={guest} />;
    }
  };

  render() {
    return (
        <div className="App">

          {this.renderFunction()}
        </div>
    );
  }
}




// render() {
//   return (
//     <Switch>
//       <Route path="/home" exact component={HomeScreen} />
//       <Route path="/login" exact component={LoginScreen} />
//       <div className="App">
//         {this.renderFunction()}
//       </div>
//   </Switch>
//   );
// }
// }
//
// export default withRouter(App)
