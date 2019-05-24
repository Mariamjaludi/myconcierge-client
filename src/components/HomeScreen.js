import React from 'react'
// import { Link } from 'react-router-dom'
// import AnalogClock from 'react-clock'
import DigitalClock from 'react-live-clock'

import Header from './Header';


export default class HomeScreen extends React.Component {

  handleClick = () => {
    // console.log(this.props.history)
    this.props.history.push('/login')
  }

  render(){
    const {getHotelName} = this.props
    let hotelName = getHotelName()
    return (
      <div className="home-screen">
        <Header hotel={hotelName}/>
        <div className="home-screen-content">
          <DigitalClock className="clock" format={'HH:mm'} ticking={true} timezone={'GB'} />
          <DigitalClock className="date" format={'dddd, MMM D '} ticking={true} timezone={'GB'} />
        </div>
        <div className='home-screen-footer'>
          <div className="hotel-name-cs">
            <div className="hotel-name">{hotelName}</div>
            <div className= "concierge-services-label">Concierge Services</div>
          </div>
          <button className="next-button" onClick={this.handleClick} type="button">→</button>
    	  </div>
      </div>
    )
  }
}

// <Link to="/login">
//   <button className="next-button" onClick={handleClick} type="button">→</button>
// </Link>
//
