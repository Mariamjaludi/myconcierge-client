import React from "react";
import AmenitiesContainer from "./AmenitiesContainer";
import DiningScreen from "./DiningScreen";
import Header from "../components/Header"
import Explore from "../components/Explore"

const BOOKING_API = "http://localhost:3000/bookings";
export default class GuestHomeScreen extends React.Component {
  state = {
    amenity: null,
    booking: null,
    explore: false
  };

  getClickedAmenity = amenity => {
    this.setState({ amenity });
  };

  clearAmenity = () => {
    this.setState({amenity: null})
  }

  createBooking = (service, booking_date, booking_time, num_of_guests = null) => {
    const { guest } = this.props
    let service_id = service.id;
    let guest_id = guest.id;
    // debugger
    fetch(BOOKING_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        service_id,
        guest_id,
        booking_date,
        booking_time,
        num_of_guests
      })
    })
      .then(resp => resp.json())
      .then(booking => this.setState({ booking }));
  };

  renderFunction = () => {
    const { getClickedAmenity, createBooking, clearAmenity, exploreClicked } = this;
    const { hotel, guest } = this.props;
    const { amenity, explore } = this.state;
    if (!amenity && !explore) {
      return (
        <AmenitiesContainer
          getClickedAmenity={getClickedAmenity}
          hotel={hotel}
          exploreClicked={exploreClicked}
        />
      );
    } else if (amenity) {
      if (amenity.amenity_name === "Restaurant") {
        return (
          <DiningScreen
            createBooking={createBooking}
            guest={guest}
            services={amenity.services}
            clearAmenity={clearAmenity}
          />
        );
      }
    } else if (explore) {
      return <Explore />
    }
  };

  exploreClicked = () => {
    this.setState({ explore: true})
  }

  render() {
    const {getHotelName} = this.props;
    let hotelName = getHotelName()
    return (
      <div className="guest-home-screen">
        <Header className="header" hotel={hotelName}/>
        {this.renderFunction()}
      </div>
    )
  }
}
