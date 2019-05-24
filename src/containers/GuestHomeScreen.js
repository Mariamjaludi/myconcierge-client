import React from "react";
import api from "../api";

import AmenitiesContainer from "./AmenitiesContainer";
import DiningScreen from "./DiningScreen";
import Header from "../components/Header";
import Explore from "./Explore";
import Account from "./Account";

class GuestHomeScreen extends React.Component {
  state = {
    amenity: null,
    booking: null,
    view: ""
  };

  getClickedAmenity = amenity => {
    this.setState({ amenity, view: amenity.amenity_name });
  };

  clearAmenity = () => {
    this.setState({ amenity: null });
  };

  createBooking = (
    service,
    booking_date,
    booking_time,
    num_of_guests = null
  ) => {
    const { guest } = this.props;
    const service_id = service.id;
    const guest_id = guest.id;

    api
      .postBooking(
        service_id,
        guest_id,
        booking_date,
        booking_time,
        num_of_guests
      )
      .then(bookings => this.setState({ bookings }));
  };

  exploreOrAccountClicked = (exploreOrAccount) => {
    // debugger
    this.setState({ view: exploreOrAccount });
  };

  accountClicked = () => {
    this.setState({ view: "Account" });
  };

  onCardClick = (path, amenity = {}) => {
    this.setState({ amenity, view: amenity.amenity_name });
  };

  renderFunction = () => {
    const {
      getClickedAmenity,
      createBooking,
      clearAmenity,
      exploreOrAccountClicked,
      onCardClick
    } = this;
    const { hotel, guest } = this.props;
    const { amenity, view } = this.state;

    switch (view) {
      case "Dining":
        return (
          <DiningScreen
            createBooking={createBooking}
            guest={guest}
            services={amenity.services}
            clearAmenity={clearAmenity}
          />
        );
      case "Explore":
        return <Explore />;
      case "Account":
        return <Account guest={guest} hotel={hotel} />;
      default:
        return (
          <AmenitiesContainer
            getClickedAmenity={getClickedAmenity}
            hotel={hotel}
            onCardClick={onCardClick}
            handleAccountorExploreClick={exploreOrAccountClicked}
          />
        );
    }
  };


  render() {

    const { hotel, getHotelName, logged_in, logOut } = this.props;
    // debugger
    if (hotel) {
      let hotelName = getHotelName();
      return (
        <div className="guest-home-screen">
          <Header className="header" hotel={hotelName} logged_in={logged_in} logOut={logOut} />
          {this.renderFunction()}
        </div>
      );
    } else return <div />;
  }
}

export default GuestHomeScreen;
