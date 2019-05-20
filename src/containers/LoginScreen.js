import React from 'react'
import Header from '../components/Header';
export default class LoginScreen extends React.Component {

  state = {
    guest_name: null,
    hotel_booking_id: null
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.findGuest(this.state.guest_name, this.state.hotel_booking_id)
  }

  render(){
    const {handleChange, handleSubmit} = this
    const {getHotelName} = this.props;
    let hotelName = getHotelName()
    return (
      <div className="login-screen">
        <Header hotel={hotelName}/>
        <form className='login-form'>
          <label className="name-label" htmlFor="guest_name">Guest Name </label>
          <input className="name" onChange={ handleChange } type="text" name="guest_name" placeholder="Guest Name"></input>
          <label className="booking-label" htmlFor="hotel_booking_id">Hotel Booking Id </label>
          <input className="booking" onChange={ handleChange } type="text" name="hotel_booking_id" placeholder="Hotel Booking Id"></input>
        </form>
        <button className="next-button" onClick={handleSubmit} type="button">→</button>
      </div>
    )
  }
}
