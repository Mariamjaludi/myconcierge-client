import React from 'react'
import AmenityCard from '../components/AmenityCard'

export default class AmenitiesContainer extends React.Component {

  render (){
    const {hotel, getClickedAmenity} = this.props
    return (
      <div id='amenities'>
        { hotel.amenities.map ( amenity => <AmenityCard getClickedAmenity={getClickedAmenity} amenity={amenity} key={amenity.id}/> ) }
  	  </div>
    )
  }
}
