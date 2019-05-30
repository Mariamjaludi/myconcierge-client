import React from "react";
import AmenityCard from "../components/AmenityCard";
// import Header from '../components/Header.js'
export default class AmenitiesContainer extends React.Component {
  render() {
    const { hotel, onCardClick, handleBillingorExploreClick } = this.props;
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
            onClick={() => handleBillingorExploreClick("Explore")}
            className="amenity-explore-card"
          >
            <h1>Explore the City</h1>
          </div>
          <div
            onClick={() => handleBillingorExploreClick("Billing")}
            className="amenity-Billing-card"
          >
            <h1>Billing</h1>
          </div>
        </div>
      </div>
    );
  }
}
