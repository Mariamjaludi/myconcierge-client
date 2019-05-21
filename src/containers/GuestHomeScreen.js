import React from "react";
import AmenitiesContainer from "./AmenitiesContainer";
import DiningScreen from "./DiningScreen";
import Header from "../components/Header"
import Explore from "./Explore"
import Account from "./Account"

const BOOKING_API = "http://localhost:3000/bookings";

export default class GuestHomeScreen extends React.Component {
  state = {
    amenity: null,
    booking: null,
    explore: false,
    account: false
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
      .then(bookings => this.setState({ bookings }));
  };

  renderFunction = () => {
    const { getClickedAmenity, createBooking, clearAmenity, exploreClicked, accountClicked } = this;
    const { hotel, guest } = this.props;
    const { amenity, explore, account } = this.state;
    if (!amenity && !explore && !account) {
      return (
        <AmenitiesContainer
          getClickedAmenity={getClickedAmenity}
          hotel={hotel}
          exploreClicked={exploreClicked}
          accountClicked={accountClicked}
        />
      );
    } else if (amenity) {
      if (amenity.amenity_name === "Dining") {
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
    } else if (account) {
      return <Account guest={guest} hotel={hotel}/>
    }
  };

  exploreClicked = () => {
    this.setState({ explore: true})
  }

  accountClicked = () => {
    this.setState({ account: true})
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
