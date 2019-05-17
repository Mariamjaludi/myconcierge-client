import React from 'react'
import Clock from 'react-live-clock'

export default class Header extends React.Component {

  render (){
    return(
      <div className='header'>
      <Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'BST'} />
      <div>header</div>
  	  </div>
    )
  }
}
