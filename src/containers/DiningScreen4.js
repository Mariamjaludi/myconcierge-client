import React from 'react'
import DatePicker from 'react-datepicker'

import "react-datepicker/dist/react-datepicker.css";

import DiningOrderContainer from './DiningOrderContainer'

export default class DiningScreen4 extends React.Component {

  state = {
    booking_date: new Date(),
    booking_time: new Date()
  }

  handleDateChange = (date) => {
    this.setState({booking_date: date})
  }

  handleTimeChange = (booking_time) => {
    this.setState({booking_time})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { order, createBooking, clearAmenity } = this.props
    const {booking_date, booking_time} = this.state
    order.forEach( order => createBooking(order.id, booking_date, booking_time))
    clearAmenity()
  }

  orderSum = () => {
    let sum = 0
    this.props.order.forEach(order => sum = sum + order.price)
    return sum
  }

  render(){
    const {handleTimeChange, handleDateChange, handleSubmit, orderSum} = this
    const {order, editOrder} = this.props
    return (
      <div>
        <p>Select a date and time for your order</p>
        <form onSubmit={handleSubmit} className='room-service-form'>
          <label htmlFor="booking_date">Date</label>
          <DatePicker selected={this.state.booking_date} onChange={handleDateChange} placeholderText="Click to select a date"/>
          <label htmlFor="booking_time">Select time</label>
          <DatePicker selected={this.state.booking_time} onChange={handleTimeChange} showTimeSelect showTimeSelectOnly timeIntervals={30} dateFormat="h:mm aa" timeCaption="Time" />
          <div>
            <p>Your Order:</p>
            <DiningOrderContainer order={order} editOrder={editOrder}/>
          </div>
          <div>Total: {orderSum()}</div>
          <input type="submit" value="ORDER"></input>
        </form>
      </div>
    )
  }
}
