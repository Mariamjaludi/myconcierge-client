import React from "react";
import api from "../api";

// import Header from "../components/Header";
// import AmenitiesContainer from "./AmenitiesContainer";
import DiningScreen from "./DiningScreen";
import WellnessAndSalonScreen from './WellnessAndSalonScreen'
import ChauffeurTaxiScreen from "../components/ChauffeurTaxiScreen"
import HousekeepingScreen from "../components/HousekeepingScreen"
import WakeUpCallScreen from "../components/WakeUpCallScreen"
import Explore from "./Explore";
import Account from "./Account";

import NavBar from "../components/NavBar"
import AmenityImage from '../components/AmenityImage'

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

    this.setState({ amenity: null, view: "" });
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
    this.setState({ amenity: exploreOrAccount, view: exploreOrAccount });
  };

  onCardClick = (path, amenity = {}) => {
    this.setState({ amenity, view: amenity.amenity_name });
  };

  onLinkClick = (amenity = {}) => {
    this.setState({ amenity, view: amenity.amenity_name });
  };

  renderFunction = () => {
    const {
      createBooking,
      clearAmenity
    } = this;
    const { hotel, guest } = this.props;
    const { amenity, view } = this.state;

    switch (view) {
      default:
       return null;
      case "Dining":
        return (
          <DiningScreen
            createBooking={createBooking}
            guest={guest}
            services={amenity.services}
            clearAmenity={clearAmenity}
          />
        );
      case "Housekeeping":
        return (
          <HousekeepingScreen
            createBooking={createBooking}
            services={amenity.services}
            clearAmenity={clearAmenity}
          />
        )
      case "Chauffeur/Taxi":
        return (
          <ChauffeurTaxiScreen
            createBooking={createBooking}
            services={amenity.services}
            clearAmenity={clearAmenity}
          />
        )
      case "Wellness":
      case "Salon":
        return (
          <WellnessAndSalonScreen
            createBooking={createBooking}
            guest={guest}
            amenityName={amenity.amenity_name}
            services={amenity.services}
            clearAmenity={clearAmenity}
          />
        );
      case "Wake Up Call":
        return (
          <WakeUpCallScreen
            createBooking={createBooking}
            services={amenity.services}
            clearAmenity={clearAmenity}
          />
        )
      case "Explore":
        return (
          <Explore
            clearAmenity={clearAmenity}
          />
        );
      case "Account":
        return (
          <Account
            guest={guest}
            hotel={hotel}
            clearAmenity={clearAmenity}
          />
        );
    }
  };

  imageRenderFunction = () => {
    const { amenity, view } = this.state;
    // let divStyle = {
    //   background: `url(${amenity.image})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center"
    // };

    switch (view) {
      default:
      return null;
      case "Dining":
      case "Housekeeping":
      case "Chauffeur/Taxi":
      case "Wellness":
      case "Salon":
      case "Wake Up Call":
      case "Explore":
      case "Account":
        return <AmenityImage amenity={amenity} view={view}/>
    }
  }

  render() {

    const { hotel, loggedIn, logOut } = this.props;
    const { onLinkClick, exploreOrAccountClicked, onLinkHover } = this
    const {view, amenity} = this.state
    // debugger
    if (hotel) {
      // let hotelName = getHotelName();
      return (
        <div className="guest-home-screen">
          <div className="amenity-img">{amenity ? this.imageRenderFunction() : null}</div>
          <NavBar hotel={hotel} onLinkClick={onLinkClick} exploreOrAccountClicked={exploreOrAccountClicked} loggedIn={loggedIn} logOut={logOut} onLinkHover={onLinkHover}/>
          <div className="amenity-page">{view ? this.renderFunction() : null }</div>
        </div>
      );
    } else return <div />;
  }
}

export default GuestHomeScreen;



// render() {
//
//   const { hotel, getHotelName, logged_in, logOut } = this.props;
//   // debugger
//   if (hotel) {
//     let hotelName = getHotelName();
//     return (
//       <div className="guest-home-screen">
//         <Header className="header" hotel={hotelName} loggedIn={logged_in} logOut={logOut} />
//         {this.renderFunction()}
//       </div>
//     );
//   } else return <div />;
// }
