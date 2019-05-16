import React from 'react'
import AmenityCard from '../components/AmenityCard'
// import '../HomeScreen.css';
export default class GuestHomeScreen extends React.Component {

  render (){
    const {hotel} = this.props
    return (
      <div>
        { hotel.amenities.map ( amenity => <AmenityCard amenity={amenity}/> ) }
  	  </div>
    )
  }
}
