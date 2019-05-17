import React from 'react'

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
    return (
      <div>
        <form className='login-form' onSubmit={ handleSubmit }>
          <label for="guest_name">Guest Name</label>
          <input onChange={ handleChange } type="text" name="guest_name" placeholder="Guest Name"></input>
          <label for="hotel_booking_id">Hotel Booking Id</label>
          <input onChange={ handleChange } type="text" name="hotel_booking_id" placeholder="Hotel Booking Id"></input>
          <input type="submit" value="Log In"></input>
        </form>
      </div>
    )
  }
}
