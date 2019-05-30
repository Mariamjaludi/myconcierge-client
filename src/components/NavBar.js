import React from "react";
import NavLink from "./NavLink";
export default class NavBar extends React.Component {
  render() {
    const { guest, onLinkClick, exploreOrOrderSummaryClicked, exploreOrOrderSummaryHover, hotel, handleHover, handleHoverOff, handleLogoClick } = this.props;
    return (
      <div className="navbar">
        <div onClick={handleLogoClick} className="logo"></div>
        <div className="hotel-name">{hotel.hotel_name}</div>
        <div className="guestWelcome">Welcome, {guest.guest_name}</div>
        <div className="amenity-links">
          {hotel.amenities.map(a => (
            <NavLink
              onLinkClick={() => onLinkClick(a)}
              handleHover={() => handleHover(a)}
              handleHoverOff={() => handleHoverOff()}
              amenity={a}
              key={a.id}
            />
          ))}
          <div
            id="Explore"
            className="amenity-link"
            onClick={() => exploreOrOrderSummaryClicked("Explore")}
            onMouseEnter={() => exploreOrOrderSummaryHover("Explore")}
            onMouseLeave={() => handleHoverOff()}
          >Explore the City</div>
          <div
            id="Order-Summary"
            className="amenity-link"
            onClick={() => exploreOrOrderSummaryClicked("Order Summary")}
            onMouseEnter={() => exploreOrOrderSummaryHover("Order Summary")}
            onMouseLeave={() => handleHoverOff()}
          >Order Summary</div>
        </div>
        <div className="logout" onClick={this.props.logOut}>Log Out</div>
        <div className="myConcierge-footer"></div>
    </div>
    );
  }
}
