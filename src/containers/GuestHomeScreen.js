import React from 'react'

import AmenitiesContainer from './AmenitiesContainer'
import DiningScreen1 from './DiningScreen1'
import DiningScreen2 from './DiningScreen2'
import DiningScreen3 from './DiningScreen3'
import DiningScreen4 from './DiningScreen4'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import '../GuestHomeScreen.css';

export default class GuestHomeScreen extends React.Component {

  state = {
    amenity: null,
    diningChoice: null
  }

  getClickedAmenity = (amenity) => {
    this.setState({amenity})
  }

  handleDiningChoice = (diningChoice) => {
    // debugger
    this.setState({diningChoice})
  }

  renderAmenityFunction = () => {
    const {hotel} = this.props
    const {getClickedAmenity, handleDiningChoice} = this
    const {amenity, diningChoice} = this.state
    if (!amenity){
      return <AmenitiesContainer getClickedAmenity={getClickedAmenity} hotel={hotel}/>
    } else if (amenity.amenity_name === "Restaurant"){
      // debugger
      if (!diningChoice){
        return <DiningScreen1 handleDiningChoice={handleDiningChoice}/>
      } else if (diningChoice === "reserve-table"){
        return <DiningScreen2 />
      } else if (diningChoice === "room-service"){
        return <DiningScreen3 amenity={amenity}/>
      }
    }
  }

  render (){
    const {hotel} = this.props
    const {getClickedAmenity, renderAmenityFunction} = this
    return (
      <div className="guest-home-screen-content">

        <Header />
        {renderAmenityFunction()}
        <Footer />

  	  </div>
    )
  }
}
