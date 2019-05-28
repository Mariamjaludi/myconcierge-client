import React from "react";
import NavLink from "./NavLink";
export default class NavBar extends React.Component {
  render() {
    const { onLinkClick, exploreOrAccountClicked, hotel } = this.props;
    return (
      <div className="navbar">
        <div className="logo"></div>
        <div className="hotel-name">{hotel.hotel_name}</div>
        <div className="amenity-links">
          {hotel.amenities.map(a => (
            <NavLink onLinkClick={() => onLinkClick(a)} amenity={a} />
          ))}
          <div id="Explore" className="amenity-link" onClick={() => exploreOrAccountClicked("Explore")}>Explore the City</div>
          <div id="Account" className="amenity-link" onClick={() => exploreOrAccountClicked("Account")}>Account</div>
        </div>
        <div className="logout" onClick={this.props.logOut}>Log Out</div>
        <div className="myConcierge-footer">Powered by MyConcierge</div>
    </div>
    );
  }
}
