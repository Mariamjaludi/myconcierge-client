import React from "react";
import AmenityCard from "../components/AmenityCard";
// import Header from '../components/Header.js'
export default class AmenitiesContainer extends React.Component {



  render() {
    const { hotel, getClickedAmenity, exploreClicked, accountClicked } = this.props;
    return (
      <div className="amenities">
        <div className="wrap">
          {hotel.amenities.map(amenity => (
            <AmenityCard
              getClickedAmenity={getClickedAmenity}
              amenity={amenity}
              key={amenity.id}
            />
          ))}
          <div onClick={exploreClicked} className="amenity-explore-card"><h1>Explore the City</h1></div>
          <div onClick={accountClicked} className="amenity-account-card"><h1>Account</h1></div>
        </div>
      </div>
    );
  }
}
