import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
export default class HousekeepingScreen extends React.Component {
  state = {
    booking_date: new Date(),
    booking_time: new Date(),
    housekeepingType: ""
  };

  handleChange = e => {
    this.setState({
      housekeepingType: e.target.value
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
    const { booking_time,booking_date, housekeepingType } = this.state;
    const housekeeping = services.filter(
      service => service.service_name === housekeepingType
    );
    // debugger
    let date = booking_date.toDateString();
    let time = booking_time.toLocaleTimeString().slice(0, -3);
    createBooking(housekeeping[0], date, time);
  };
  render() {
    const { booking_time, housekeepingType } = this.state;
    const {
      handleChange,
      handleTimeChange,
      handleSubmit
    } = this;

    return (
      <div className="housekeeping-screen">
        <div className="housekeeping-header">Housekeeping</div>
        <form className="housekeeping-form" onSubmit={handleSubmit}>
          <label className="requested-time-lbl" htmlFor="booking_time">Requested Housekeeping time</label>
          <DatePicker
            className="time-picker"
            selected={booking_time}
            onChange={handleTimeChange}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={30}
            dateFormat="h:mm aa"
          />
          <div className="services-lbl">Services</div>
          <div className="radiogroup">
            <label className="towels-lbl" htmlFor="Change Towels">Change Towels</label>
            <input
              className="towels"
              type="radio"
              value="Change Towels"
              checked={housekeepingType === "Change Towels"}
              onChange={handleChange}
            />
          <label className="clean-lbl" htmlFor="Clean Room">Clean Room</label>
            <input
              className="clean"
              type="radio"
              value="Clean Room"
              checked={housekeepingType === "Clean Room"}
              onChange={handleChange}
            />
          <label className="laundry-lbl" htmlFor="Laundry Service">Laundry Service</label>
            <input
              className="laundry"
              type="radio"
              value="Laundry Service"
              checked={housekeepingType === "Laundry Service"}
              onChange={handleChange}
            />
          </div>
          <div className="submit-btn">
            <input type="submit" value="CONFIRM" />
          </div>  
        </form>
      </div>
    );
  }
}
// <div className="housekeeping-footer">
//   <button
//     className="next-button"
//     onClick={this.props.clearAmenity}
//     type="button"
//   >
//     ←
//   </button>
//   <span>MAIN MENU</span>
// </div>
