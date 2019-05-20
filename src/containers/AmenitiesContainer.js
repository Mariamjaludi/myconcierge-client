import React from "react";
import AmenityCard from "../components/AmenityCard";
import Header from '../components/Header.js'
export default class AmenitiesContainer extends React.Component {
  render() {
    const { hotel, getClickedAmenity, exploreClicked } = this.props;
    return (
      <div className="amenities">
        {hotel.amenities.map(amenity => (
          <AmenityCard
            getClickedAmenity={getClickedAmenity}
            amenity={amenity}
            key={amenity.id}
          />
        ))}
        <div onClick={exploreClicked} className="explore-card">Explore the City</div>
      </div>
    );
  }
}
