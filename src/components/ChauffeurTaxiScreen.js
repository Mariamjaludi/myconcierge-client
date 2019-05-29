import React from "react";
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
export default class ChauffeurTaxiScreen extends React.Component {
  state = {
    booking_date: new Date(),
    booking_time: new Date(),
    transportType: "",
    reserved: false
  };

  handleChange = e => {
    this.setState({
      transportType: e.target.value
    });
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
    const { booking_date, booking_time, transportType } = this.state;
    const transportation = services.filter(
      service => service.service_name === transportType
    );
    // debugger
    let date = booking_date.toDateString();
    let time = booking_time.toLocaleTimeString().slice(0, -3);
    createBooking(transportation[0], date, time);
    this.setState({reserved: true})
  };

  render() {
    const { booking_date, booking_time, transportType } = this.state;
    const {
      handleChange,
      handleDateChange,
      handleTimeChange,
      handleSubmit
    } = this;
    return (
      <div className="taxi-screen">
        <div className="taxi-screen-header">Chauffeur/Taxi</div>
        <form className="taxi-form" onSubmit={handleSubmit}>
          <div className="transportation-type-header">Transportation type</div>
          <div className="transportation-radiogroup">
            <label className="lux-lbl" htmlFor="Luxury vehicle with private chauffeur">Luxury vehicle with private chauffeur</label>
            <input
              className="lux-radio"
              type="radio"
              value="Luxury vehicle with private chauffeur"
              checked={transportType === "Luxury vehicle with private chauffeur"}
              onChange={handleChange}
            />
          <label className="shuttle-lbl" htmlFor="Airport Shuttle">Airport Shuttle</label>
            <input
              className="shuttle-radio"
              type="radio"
              value="Airport Shuttle"
              checked={transportType === "Airport Shuttle"}
              onChange={handleChange}
            />
          <label className="taxi-lbl" htmlFor="Taxi">Taxi</label>
            <input
              className="taxi-radio"
              type="radio"
              value="Taxi"
              checked={transportType === "Taxi"}
              onChange={handleChange}
            />
          </div>
          <div className="date-time">
            <label className="booking-date-label" htmlFor="booking_date">
              Date
            </label>
            <DatePicker className="date-picker" selected={booking_date} onChange={handleDateChange} />
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
    );
  }
}
// <div className="taxi-footer">
//   <button
//     className="next-button"
//     onClick={this.props.clearAmenity}
//     type="button"
//   >
//     ←
//   </button>
//   <span>MAIN MENU</span>
// </div>
