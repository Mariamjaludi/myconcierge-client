import React from 'react'
import Clock from 'react-live-clock'

export default class Header extends React.Component {

  render (){
    return(
      <div className='header'>
        <div className='logo'>Logo</div>
        <div className="hotel-name">
          <strong>Test Hotel</strong>
          <p>Concierge Services</p>
        </div>
        <div className='clock'>
          <div>Date</div>
          <Clock format={'HH:mm:ss'} ticking={true} timezone={'BST'} />
        </div>
  	  </div>
    )
  }
}
