import React from "react";
import AmenitiesContainer from "./AmenitiesContainer";
import DiningScreen from "./DiningScreen";

const BOOKING_API = "http://localhost:3000/bookings";
export default class GuestHomeScreen extends React.Component {
  state = {
    amenity: null,
    booking: null
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
    const { getClickedAmenity, createBooking, clearAmenity } = this;
    const { hotel, guest } = this.props;
    const { amenity } = this.state;
    if (!amenity) {
      return (
        <AmenitiesContainer
          getClickedAmenity={getClickedAmenity}
          hotel={hotel}
        />
      );
    } else if (amenity.amenity_name === "Restaurant") {
      return (
        <DiningScreen
          createBooking={createBooking}
          guest={guest}
          services={amenity.services}
          clearAmenity={clearAmenity}
        />
      );
    }
  };

  render() {
    return this.renderFunction();
  }
}
