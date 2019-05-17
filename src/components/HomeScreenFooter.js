import React from 'react'

export default class HomeScreenFooter extends React.Component {

  render (){
    const {handleClick} = this.props
    return(
      <div className='home-screen-footer'>
        <div>footer</div>
        <button className="next-button" onClick={handleClick} type="button">log in</button>
  	  </div>
    )
  }
}
