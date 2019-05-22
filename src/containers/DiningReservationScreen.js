import React from "react";
import DatePicker from 'react-datepicker'


import "react-datepicker/dist/react-datepicker.css";

export default class DiningReservationScreen extends React.Component {
  state = {
    booking_date: new Date(),
    booking_time: new Date(),
    num_of_guests: null
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDateChange = date => {
    debugger
    this.setState({ booking_date: date });
  };

  handleTimeChange = date => {
    this.setState({ booking_time: date });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { services, clearAmenity } = this.props;
    const { booking_date, booking_time, num_of_guests } = this.state;
    const reserveTable = services.filter(
      service => service.service_type === "Reserve Table"
    );
    let date = booking_date.toDateString()
    let time = booking_time.toLocaleTimeString().slice(0, -3)
    this.props.createBooking(reserveTable[0], date, time, num_of_guests);
    clearAmenity();
}

  render() {
    const { handleChange, handleDateChange, handleTimeChange, handleSubmit } = this;
    return (
      <div className="dining-reservation-screen">

        <div className="dining-screen-header">DINING</div>
        <div className="reservation-info-label">RESERVATION INFO</div>
        <form className="reservation-form" onSubmit={handleSubmit}>
          <label className="booking-date-label" htmlFor="booking_date">Dining Date</label>
          <DatePicker
            selected={this.state.booking_date}
            onChange={handleDateChange}
            placeholderText="Click to select a date"
          />
          <label htmlFor="booking_time">Dining Time</label>
          <DatePicker
            selected={this.state.booking_time}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            dateFormat="h:mm aa"
            placeholderText="Click to select your dining time"
          />
        <label htmlFor="num_of_guests">No. of Guests</label>
          <input
            onChange={handleChange}
            type="text"
            name="num_of_guests"
            placeholder="No. of Guests"
          />
        <hr />
          <input type="submit" value="RESERVE" />
        </form>
        <div className="reservation-footer">
          <button
            className="next-button"
            onClick={this.props.clearAmenity}
            type="button"
          >
          ←
          </button>
          <span>MAIN MENU</span>
        </div>
      </div>
    );
  }
}
