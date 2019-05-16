import React from 'react'
// import '../HomeScreen.css';
export default class HomeScreen extends React.Component {

  render (){
    const {handleClick} = this.props
    return (
      <div>
        <button onClick={handleClick} type="button">log in</button>
  	  </div>
    )
  }
}
