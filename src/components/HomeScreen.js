import React from 'react'
// import AnalogClock from 'react-clock'
import DigitalClock from 'react-live-clock'


export default class HomeScreen extends React.Component {

  render(){
    const {handleClick} = this.props
    return (
      <div className="home-screen-content">
        <div>header</div>
        <DigitalClock className="clock" format={'HH:mm'} ticking={true} timezone={'GB'} />
          <div className='home-screen-footer'>Footer
          <div>
            <strong>Test Hotel</strong>
            <p>Concierge Services</p>
          </div>
          <button className="next-button" onClick={handleClick} type="button">→</button>
    	  </div>
  	  </div>
    )
  }
}
