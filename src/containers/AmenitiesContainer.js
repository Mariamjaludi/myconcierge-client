import React from "react";
import AmenityCard from "../components/AmenityCard";

export default class AmenitiesContainer extends React.Component {
  render() {
    const { hotel, getClickedAmenity } = this.props;
    return (
      <div className="amenities">
        {hotel.amenities.map(amenity => (
          <AmenityCard
            getClickedAmenity={getClickedAmenity}
            amenity={amenity}
            key={amenity.id}
          />
        ))}
      </div>
    );
  }
}
