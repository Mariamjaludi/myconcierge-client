import React from 'react'
import Clock from 'react-live-clock'
// import '../HomeScreen.css';
export default class HomeScreen extends React.Component {

  render (){
    const {handleClick} = this.props
    return (
      <div>
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'BST'} />
        <button onClick={handleClick} type="button">log in</button>
  	  </div>
    )
  }
}
