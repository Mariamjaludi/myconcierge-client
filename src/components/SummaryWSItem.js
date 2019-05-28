import React from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class SummaryWSItem extends React.Component {

  state = {
    booking_date: new Date(),
    booking_time: new Date(),

  }

  handleRemoveClick = (event) => {
    const {item, editOrder} = this.props
    editOrder(item)
  }

  handleDateChange = date => {
    this.setState({ booking_date: date });
  };

  handleTimeChange = date => {
    this.setState({ booking_time: date });
  };

//creates a booking when "book" is clicked
  createItemBooking = () => {
    const {item, createBooking} = this.props
    const {booking_date, booking_time} = this.state
    const date = booking_date.toDateString()
    const time = booking_time.toLocaleTimeString().slice(0, -3)
    createBooking(item, date, time)
  }

  render(){
    const {item} = this.props
    const {booking_date, booking_time} = this.state
    const {createItemBooking, handleDateChange, handleTimeChange, handleRemoveClick} = this
    return (
      <div className="menu-item" >
          <p className="treatment-name"><strong>{item.service_name}</strong></p>
          <div className="price">{item.price}</div>
          <label className="booking-date-label" htmlFor="booking_date">
            Date
          </label>
          <DatePicker className="date-picker" selected={booking_date} onChange={handleDateChange} />
          <label htmlFor="booking_time">Time</label>
          <DatePicker
            className="time-picker"
            selected={booking_time}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            dateFormat="h:mm aa"
          />
        <div className="book-btn" onClick={createItemBooking}>book</div>
          <div onClick={handleRemoveClick}>remove</div>
          {}
      </div>
    )
  }
}
