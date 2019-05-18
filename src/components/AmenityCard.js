import React from "react";

export default class AmenitiesCard extends React.Component {
  handleClick = event => {
    this.props.getClickedAmenity(this.props.amenity);
  };

  render() {
    const { amenity } = this.props;
    return (
      <div onClick={this.handleClick} id={amenity.id}>
        {amenity.amenity_name}
      </div>
    );
  }
}
