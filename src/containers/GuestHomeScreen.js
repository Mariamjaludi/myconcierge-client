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
import OrderSummary from "./OrderSummary";

import NavBar from "../components/NavBar"
import AmenityImage from '../components/AmenityImage'
import AmenityDesc from '../components/AmenityDesc'
class GuestHomeScreen extends React.Component {
  state = {
    amenity: null,
    booking: null,
    view: "",
    navClicked: false,
    showConfirmation: false,
    diningChoice: null,
    showRSSummary: false,
    navHover: false
  };

  clickToShowConfirmation = () => {
    this.setState({
      showConfirmation: true
    })
  }

  handleLogoClick = () => {
    this.setState({ amenity: null, view: "", navClicked: false });
  }

  clickToShowReserveOrRoomService = diningChoice => {
    this.setState({diningChoice})
  }

  clicktoShowRSSummary = () => {
    this.setState({
      showRSSummary: true
    })
  }

  clearAmenity = () => {

    this.setState({ amenity: null, view: "" });
    // document.querySelector('.guest-home-screen').classList.remove('hide');
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

  exploreOrOrderSummaryClicked = exploreOrOrderSummary => {
    // document.querySelector('.guest-home-screen').classList.add('hide');
    this.setState({
      amenity: exploreOrOrderSummary,
      view: exploreOrOrderSummary,
      navClicked: true
    });
  };

  exploreOrOrderSummaryHover = exploreOrOrderSummary => {
    if (!this.state.navClicked) {
      this.setState({
        amenity: exploreOrOrderSummary,
        view: exploreOrOrderSummary,
        navHover: true
      })
    }
  }

  handleHover = (amenity = {}) => {
    if (!this.state.navClicked) {
      this.setState({
        amenity,
        view: amenity.amenity_name,
        navHover: true
      })
    }
  }

  handleHoverOff = () => {
    if (!this.state.navClicked) {
      this.setState({
        amenity: null,
        view: '',
        navHover: false
      })
    }
  }

  onLinkClick = (amenity = {}) => {
    // debugger
    // document.querySelector('.guest-home-screen').classList.add('hide');

    this.setState({
      amenity,
      view: amenity.amenity_name,
      navClicked: true,
      showConfirmation: false,
      diningChoice: false,
      showRSSummary: false
    });
  };

  renderFunction = () => {
    const {
      createBooking,
      clearAmenity,
      clickToShowReserveOrRoomService,
      clicktoShowRSSummary
    } = this;
    const { hotel, guest } = this.props;
    const { amenity, view , diningChoice, showRSSummary } = this.state;

    switch (view) {
      default:
       return null;
      case "Dining":
        return (
          <DiningScreen
            diningChoice={diningChoice}
            createBooking={createBooking}
            guest={guest}
            services={amenity.services}
            clickToShowReserveOrRoomService={clickToShowReserveOrRoomService}
            clearAmenity={clearAmenity}
            clicktoShowRSSummary={clicktoShowRSSummary}
            showRSSummary={showRSSummary}
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
            showConfirmation={this.state.showConfirmation}
            clickToShowConfirmation={this.clickToShowConfirmation}
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
      case "Order Summary":
        return (
          <OrderSummary
            guest={guest}
            hotel={hotel}
            clearAmenity={clearAmenity}
          />
        );
    }
  };

  imageRenderFunction = () => {
    const { amenity, view } = this.state;

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
      case "Order Summary":
        return <AmenityImage amenity={amenity} view={view}/>
    }
  }

  descRenderFunction = () => {
    const { view } = this.state;
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
      case "Order Summary":
        return <AmenityDesc amenityName={view}/>
    }
  }

  amenityPageRender = () => {
    const {view, navClicked, navHover} = this.state
    if (view && navClicked) {
      this.renderFunction()
    } else if (view && navHover) {
      this.descRenderFunction()
    } else {
      return null;
    }
  }

  render() {

    const { hotel, loggedIn, logOut, guest } = this.props;
    const { onLinkClick, exploreOrOrderSummaryClicked, exploreOrOrderSummaryHover, onLinkHover, handleHover, handleHoverOff, handleLogoClick } = this
    const {view, amenity, navClicked} = this.state
    // debugger
    if (hotel) {
      // let hotelName = getHotelName();
      return (
        <div className="guest-home-screen">
          <div className="amenity-img">{amenity ? this.imageRenderFunction() : null}</div>
          <NavBar
            guest={guest}
            hotel={hotel}
            onLinkClick={onLinkClick}
            exploreOrOrderSummaryClicked={exploreOrOrderSummaryClicked}
            loggedIn={loggedIn}
            logOut={logOut}
            onLinkHover={onLinkHover}
            handleHover={handleHover}
            exploreOrOrderSummaryHover={exploreOrOrderSummaryHover}
            handleHoverOff={handleHoverOff}
            handleLogoClick={handleLogoClick}
          />
        <div className="amenity-page">{view && navClicked ? this.renderFunction() : null }</div>
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
