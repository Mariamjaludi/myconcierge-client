import React from "react";
import AmenityCard from "../components/AmenityCard";
// import Header from '../components/Header.js'
export default class AmenitiesContainer extends React.Component {
  render() {
    const { hotel, onCardClick, handleAccountorExploreClick } = this.props;
    return (
      <div className="amenities">
        <div className="wrap">
          {hotel.amenities.map(amenity => (
            <AmenityCard
              onCardClick={() =>
                onCardClick(`${amenity.amenity_name.toLowerCase()}`, amenity)
              }
              amenity={amenity}
              key={amenity.id}
            />
          ))}
          <div
            onClick={() => handleAccountorExploreClick("Explore")}
            className="amenity-explore-card"
          >
            <h1>Explore the City</h1>
          </div>
          <div
            onClick={() => handleAccountorExploreClick("Account")}
            className="amenity-account-card"
          >
            <h1>Account</h1>
          </div>
        </div>
      </div>
    );
  }
}
