import React from 'react'
import DigitalClock from 'react-live-clock'
export default class Header extends React.Component {

  render (){
    return (
      <div className="header">
      <div className="hotel-logo"></div>
      <div className="hotel-name-cs">
        <div className="hotel-name">{this.props.hotel}</div>
        <div className= "concierge-services-label">Concierge Services</div>
      </div>
      <div className="header-time-date">
        <DigitalClock className="header-date" format={'dddd, MMM D '} ticking={true} timezone={'GB'} />
        <DigitalClock className="header-clock" format={'HH:mm'} ticking={true} timezone={'GB'} />
        {(this.props.loggedIn) ? <button className="logout" onClick={this.props.logOut} type="button">Log Out</button> : null }
      </div>
      </div>
    )
  }
}
