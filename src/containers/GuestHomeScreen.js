import React from 'react'
import AmenitiesContainer from './AmenitiesContainer'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import '../GuestHomeScreen.css';

export default class GuestHomeScreen extends React.Component {

  state = {
    amenity: null
  }

  getClickedAmenity = (amenity) => {
    this.setState({amenity})
      // debugger
  }

  render (){
    const {hotel} = this.props
    const {getClickedAmenity} = this
    return (
      <div className="guest-home-screen-content">

        <Header />
        <AmenitiesContainer getClickedAmenity={getClickedAmenity} hotel={hotel}/>
        <Footer />

  	  </div>
    )
  }
}
