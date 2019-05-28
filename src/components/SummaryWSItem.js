import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class SummaryWSItem extends React.Component {
  state = {
    booking_date: new Date(),
    booking_time: new Date()
  };

  handleRemoveClick = event => {
    const { item, editOrder } = this.props;
    editOrder(item);
  };

  handleDateChange = date => {
    this.setState({ booking_date: date });
  };

  handleTimeChange = date => {
    this.setState({ booking_time: date });
  };

  //creates a booking when "book" is clicked
  createItemBooking = () => {
    const { item, createBooking } = this.props;
    const { booking_date, booking_time } = this.state;
    const date = booking_date.toDateString();
    const time = booking_time.toLocaleTimeString().slice(0, -3);
    createBooking(item, date, time);
  };

  render() {
    const { item } = this.props;
    const { booking_date, booking_time } = this.state;
    const {
      createItemBooking,
      handleDateChange,
      handleTimeChange,
      handleRemoveClick
    } = this;
    return (
      <div className="menu-item">
        <div className="treatment-name">{item.service_name}</div>
        <div className="price">£{item.price}</div>

        <div className="date-time">
          <label className="date-lbl" htmlFor="booking_date">
            Date
          </label>
          <DatePicker
            className="date"
            selected={booking_date}
            onChange={handleDateChange}
          />
          <label className="time-lbl" htmlFor="booking_time">
            Time
          </label>
          <DatePicker
            className="time"
            selected={booking_time}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            dateFormat="h:mm aa"
          />
        </div>
        <div className="remove" onClick={handleRemoveClick}>
          remove
        </div>
        <div className="book" onClick={createItemBooking}>
          book
        </div>


      </div>
    );
  }
}
