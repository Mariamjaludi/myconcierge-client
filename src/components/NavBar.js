import React from 'react'
import AmenityLink from './AmenityLink'
export default class NavBar extends React.Component {


  render () {
    const {handleClick, hotel} = this.props
    return (
      <div className="navbar">
        <div onClick={handleClick}>Hotel Logo</div>
        {hotel.amenities.map(a => <AmenityLink amenity={a}/>)}
        <div>Hotel name</div>
        <div>Dining</div>
        <div>Housekeeping</div>
        <div>Chauffeur/Taxi</div>
        <div>Wellness</div>
        <div>Salon</div>
        <div>Wake Up Call</div>
        <div>Explore the City</div>
        <div>Account</div>
      </div>
    )
  }
}
