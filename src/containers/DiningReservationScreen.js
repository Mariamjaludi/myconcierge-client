import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export default class DiningReservationScreen extends React.Component {
  state = {
    booking_date: new Date(),
    booking_time: new Date(),
    num_of_guests: null,
    reserved: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
    const { services } = this.props;
    const { booking_date, booking_time, num_of_guests } = this.state;
    const reserveTable = services.filter(
      service => service.service_type === "Reserve Table"
    );
    let date = booking_date.toDateString();
    let time = booking_time.toLocaleTimeString().slice(0, -3);
    this.props.createBooking(reserveTable[0], date, time, num_of_guests);
    // clearAmenity();
    this.setState({reserved: true})
  };

  render() {
    const {
      handleChange,
      handleDateChange,
      handleTimeChange,
      handleSubmit,
    } = this;
    return (
      <div className="dining-reservation-screen">
        <div className="reservation-info-label">Reservation Information</div>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <label className="booking-date-label" htmlFor="booking_date">
            Dining Date
          </label>
          <DatePicker
            className="date-picker"
            selected={this.state.booking_date}
            onChange={handleDateChange}
          />
        <label className="booking-time-label" htmlFor="booking_time">Dining Time</label>
          <DatePicker
            className="time-picker"
            selected={this.state.booking_time}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            dateFormat="h:mm aa"
          />
        <label className="no-of-guests-label" htmlFor="num_of_guests">No. of Guests</label>
          <input
            className="no-of-guests-input"
            onChange={handleChange}
            type="text"
            name="num_of_guests"
            placeholder="No. of Guests"
          />
          <div className="submit-div">
            {this.state.reserved ? <div className="confirm-msg">Reservation Confirmed</div> : null}
            <div className="submit-btn-div">
              <input className="submit-btn" type="submit" value="Reserve" />
            </div>
          </div>
        </form>

      </div>
    );
  }
}
