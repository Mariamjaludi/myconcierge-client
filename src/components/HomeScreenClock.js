import React from 'react'
import Clock from 'react-live-clock'

export default class HomeScreenClock extends React.Component {

  render (){
    return(
      <div className='home-screen-clock'>
      <Clock className="clock" format={'HH:mm:ss'} ticking={true} timezone={'BST'} />
  	  </div>
    )
  }
}
