import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import DiningOrderContainer from "./DiningOrderContainer";

export default class ConfirmRoomServiceScreen extends React.Component {
  state = {
    booking_date: new Date(),
    booking_time: new Date()
  };

  handleDateChange = event => {
    debugger
    this.setState({ booking_date: event });
  };

  handleTimeChange = event => {
    this.setState({ booking_time: event });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { order, createBooking, clearAmenity } = this.props;
    const { booking_date, booking_time } = this.state;
    let date = booking_date.toDateString()
    let time = booking_time.toLocaleTimeString().slice(0, -3)
    // debugger
    order.forEach(o => createBooking(o, date, time));
    clearAmenity();
  };

  orderSum = () => {
    let sum = 0;
    this.props.order.forEach(order => (sum = sum + order.price));
    return sum.toFixed(2);
  };

  render() {
    const { handleTimeChange, handleDateChange, handleSubmit, orderSum } = this;
    const { order, editOrder } = this.props;
    return (
      <div>
        <p>Select a date and time for your order</p>
        <form onSubmit={handleSubmit} className="room-service-form">
          <label htmlFor="booking_date">Date</label>
          <DatePicker
            selected={this.state.booking_date}
            onChange={handleDateChange}
            placeholderText="Click to select a date"
          />
          <label htmlFor="booking_time">Select time</label>
          <DatePicker
            selected={this.state.booking_time}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            dateFormat="h:mm aa"
            timeCaption="Time"
          />
          <div>
            <p>Your Order:</p>
            <DiningOrderContainer order={order} editOrder={editOrder} />
          </div>
          <div>Total: {orderSum()}</div>
          <input type="submit" value="ORDER" />
        </form>
      </div>
    );
  }
}
