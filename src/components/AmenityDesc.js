import React from 'react'

export default class AmenityDesc extends React.Component {

  renderFunction(amenityName) {
    let divStyle = {
      backgroundColor: "white"
    }
    switch (amenityName) {
    default: return null;
    case "Dining":
      return <div className="amenity-desc" style={divStyle}>View our house restaurant menu for room service or reserve a table at our restaurant</div>;
    case "Housekeeping":
      return <div className="amenity-desc" style={divStyle}>Request additional housekeeping services</div>
    case "Wellness":
      return <div className="amenity-desc" style={divStyle}>View a variety of treatments available at our spa and book your next session</div>
    case "Salon":
      return <div className="amenity-desc" style={divStyle}>Book your next hair and/or nail appointment with our expert team</div>
    case "Wake Up Call":
      return <div className="amenity-desc" style={divStyle}>Request a wake up call at any time</div>
    case "Explore":
      return <div className="amenity-desc" style={divStyle}>View some of the amazing attractions you can see in our city</div>
    case "Order Summary":
      return <div className="amenity-desc" style={divStyle}>View your Order Summary</div>
    }
  }
  render () {
    const { amenityName } = this.props
    return this.renderFunction(amenityName)
  }
}
