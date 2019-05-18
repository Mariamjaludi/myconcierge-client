import React from "react";
import AmenitiesContainer from "./AmenitiesContainer";
import DiningScreen1 from "./DiningScreen1";

const BOOKING_API = "http://localhost:3000/bookings";
export default class GuestHomeScreen extends React.Component {
  state = {
    amenity: null,
    booking: null
  };

  getClickedAmenity = amenity => {
    this.setState({ amenity });
  };

  createBooking = (service, booking_date, booking_time) => {
    const { guest } = this.props
    fetch(BOOKING_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        service_id: service.id,
        guest_id: guest.id,
        booking_date: booking_date,
        booking_time: booking_time
      })
    })
      .then(resp => resp.json())
      .then(booking => this.setState({ booking }));
  };

  renderFunction = () => {
    const { getClickedAmenity, createBooking } = this;
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
        <DiningScreen1
          createBooking={createBooking}
          guest={guest}
          services={amenity.services}
        />
      );
    }
  };

  render() {
    return this.renderFunction();
  }
}
