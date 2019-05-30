import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export default class WakeUpCallScreen extends React.Component {
  state = {
    booking_date: new Date(),
    booking_time: new Date(),
    reserved: false
  };

  handleDateChange = date => {
    // debugger;
    this.setState({ booking_date: date });
  };

  handleTimeChange = date => {
    this.setState({ booking_time: date });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { services, createBooking } = this.props;
    const { booking_date, booking_time } = this.state;
    const wakeUpCall = services.filter(
      service => service.service_name === "Wake Up Call"
    );

    let date = booking_date.toDateString();
    let time = booking_time.toLocaleTimeString().slice(0, -3);
    if (wakeUpCall.length > 0) {
      createBooking(wakeUpCall[0], date, time);
      this.setState({reserved: true})
    }
  };

  render() {
    const { booking_date, booking_time } = this.state;
    const { handleDateChange, handleTimeChange, handleSubmit } = this;
    return (
      <div className="wakeup-call-screen">
        <div className="wakeup-call-header">Wake Up Call</div>
        <form className="wakeup-call-form" onSubmit={handleSubmit}>
          <div className="date-time">
            <label className="booking-date-label" htmlFor="booking_date">
              Date
            </label>
            <DatePicker
              className="date-picker"
              selected={booking_date}
              onChange={handleDateChange}
            />
          <label className="booking-time-label" htmlFor="booking_time">Pick Up Time</label>
            <DatePicker
              className="time-picker"
              selected={booking_time}
              onChange={handleTimeChange}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              dateFormat="h:mm aa"
            />
          </div>
          <div className="submit-div">
            {this.state.reserved ? <div className="confirm-msg">Reservation Confirmed</div> : null}
            <div className="submit-btn-div">
              <input className="submit-btn" type="submit" value="Confirm" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
