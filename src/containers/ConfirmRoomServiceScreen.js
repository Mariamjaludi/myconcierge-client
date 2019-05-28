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
    const { order, createBooking } = this.props;
    const { booking_date, booking_time } = this.state;
    let date = booking_date.toDateString()
    let time = booking_time.toLocaleTimeString().slice(0, -3)
    order.forEach(o => createBooking(o, date, time));
    // clearAmenity();
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
      <div className="confirm-rs-screen">
        <p className="select-label">Select a date and time for your order</p>
        <form className="room-service-form" onSubmit={handleSubmit} >
          <div className="date-and-time">
            <label className="date-lbl" htmlFor="booking_date">Date</label>
            <DatePicker
              className="date-picker"
              selected={this.state.booking_date}
              onChange={handleDateChange}
              placeholderText="Click to select a date"
            />
          <label className="time-lbl" htmlFor="booking_time">Time</label>
            <DatePicker
              className="time-picker"
              selected={this.state.booking_time}
              onChange={handleTimeChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              dateFormat="h:mm aa"
              timeCaption="Time"
            />
          </div>
          <p className="your-order-lbl">Your Order:</p>
          <DiningOrderContainer order={order} editOrder={editOrder} />
          <div className="order-sum">Total: {orderSum()}</div>
          <div className="cancel-and-submit">
            <div className="submit-btn">
              <input type="submit" value="Order" />
            </div>
            <div className="cancel-btn">
              <button type="button" value="Cancel">Cancel Order</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
