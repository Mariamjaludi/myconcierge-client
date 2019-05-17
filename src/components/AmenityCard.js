import React from 'react'
// import '../HomeScreen.css';
export default class AmenityCard extends React.Component {

  handleClick = (event) => {
    this.props.getClickedAmenity(this.props.amenity)
  }

  render (){
    const {amenity} = this.props
    return (
      <div onClick={this.handleClick} id={amenity.id}>
        {amenity.amenity_name}
  	  </div>
    )
  }
}
