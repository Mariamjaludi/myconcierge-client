import React from 'react'
// import '../HomeScreen.css';
export default class AmenityCard extends React.Component {

  render (){
    const {amenity} = this.props
    return (
      <div>
        {amenity.amenity_name}
  	  </div>
    )
  }
}
