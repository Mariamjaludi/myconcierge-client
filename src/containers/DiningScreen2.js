import React from 'react'

export default class DiningScreen2 extends React.Component {

  render(){
    return (
      <div>
        <div className='dining-screen-header'>DINING</div>
        <div>RESERVATION INFO</div>
        <form className='dining-reservation-form'>
          <label for="dining-date">Dining Date</label>
          <input type="text" name="dining-date" placeholder="Dining Date"></input>
          <label for="dining-time">Dining Time</label>
          <input type="text" name="dining-time" placeholder="Dining Time"></input>
          <label for="guest-no">No. of Guests</label>
          <input type="text" name="guest-no" placeholder="No. of Guests"></input>
          <div>______________________________________________________</div>
          <input type="submit" value="RESERVE"></input>
        </form>
      </div>
    )
  }
}
