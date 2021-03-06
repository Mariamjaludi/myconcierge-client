import React from "react";

export default class AmenitiesCard extends React.Component {
  handleClick = event => {
    this.props.onCardClick();
  };

  render() {
    const { amenity } = this.props;
    let divStyle = {
      backgroundImage: `url(${amenity.image}) no-repeat`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    };
    return (
      <div
        className="amenity-card"
        style={divStyle}
        onClick={this.handleClick}
        id={amenity.id}
      >
        <h1>{amenity.amenity_name}</h1>
      </div>
    );
  }
}
