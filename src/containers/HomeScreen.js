import React from 'react'
import '../HomeScreen.css';
import HomeScreenHeader from '../components/HomeScreenHeader'
import HomeScreenFooter from '../components/HomeScreenFooter'
import HomeScreenClock from '../components/HomeScreenClock'

export default class HomeScreen extends React.Component {

  render (){
    const {handleClick} = this.props
    return (
      <div className="home-screen-content">
        <HomeScreenHeader />
        <HomeScreenClock />
        <HomeScreenFooter handleClick={handleClick}/>
  	  </div>
    )
  }
}
