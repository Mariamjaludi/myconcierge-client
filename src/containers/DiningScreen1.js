import React from 'react'

export default class DiningScreen1 extends React.Component {

  state = {
    choice: null
  }

  handleClick = (event) => {
    // debugger
    this.setState({
      choice: event.target.id
    })
    this.props.handleDiningChoice(this.state.choice)
  }

  render(){

    return (
      <div>
        <div className='dining-screen-header'>DINING</div>
        <p></p>
        <p></p>
        <div
          className="room-service"
          id="room-service"
          onClick={this.handleClick}
        >ROOM SERVICE</div>
        <p>-or-</p>
        <div
          className="reserve-table"
          id="reserve-table"
          onClick={this.handleClick}
          >RESERVE A TABLE</div>
      </div>
    )
  }
}
