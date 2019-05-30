import React from "react";
import AmenityCard from "../components/AmenityCard";
// import Header from '../components/Header.js'
export default class AmenitiesContainer extends React.Component {
  render() {
    const { hotel, onCardClick, handleOrderSummaryorExploreClick } = this.props;
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
            onClick={() => handleOrderSummaryorExploreClick("Explore")}
            className="amenity-explore-card"
          >
            <h1>Explore the City</h1>
          </div>
          <div
            onClick={() => handleOrderSummaryorExploreClick("Order Summary")}
            className="amenity-order-summary-card"
          >
            <h1>Order Summary</h1>
          </div>
        </div>
      </div>
    );
  }
}
