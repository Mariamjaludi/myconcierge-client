import React from "react";

export default class DiningScreen2 extends React.Component {
  state = {
    booking_date: null,
    booking_time: null,
    guest_no: null
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { services } = this.props;
    const { booking_date, booking_time } = this.state;
    const roomService = services.filter(
      service => service.service_type === "Room Service"
    );
    this.props.createBooking(roomService, booking_date, booking_time);
  };

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <div className="dining-screen-header">DINING</div>
        <div>RESERVATION INFO</div>
        <form onSubmit={handleSubmit} className="dining-reservation-form">
          <label for="booking_date">Dining Date</label>
          <input
            onChange={handleChange}
            type="text"
            name="booking_date"
            placeholder="Dining Date"
          />
          <label for="booking_time">Dining Time</label>
          <input
            onChange={handleChange}
            type="text"
            name="booking_time"
            placeholder="Dining Time"
          />
          <label for="guest-no">No. of Guests</label>
          <input
            onChange={handleChange}
            type="text"
            name="guest-no"
            placeholder="No. of Guests"
          />
          <div>______________________________________________________</div>
          <input type="submit" value="RESERVE" />
        </form>
        <div>footer</div>
      </div>
    );
  }
}
