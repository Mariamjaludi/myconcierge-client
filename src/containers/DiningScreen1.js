import React from "react";
import DiningScreen2 from "./DiningScreen2";
import DiningScreen3 from "./DiningScreen3";

export default class DiningScreen1 extends React.Component {
  state = {
    diningChoice: null
  };

  handleClick = event => {
    this.setState({
      choice: event.target.id
    });
  };

  renderRoomServiceOrReserveTable = () => {
    return (
      <div>
        <div className="dining-screen-header">DINING</div>
        <div
          className="room-service"
          id="room-service"
          onClick={this.handleClick}
        >
          ROOM SERVICE
        </div>
        <p>-or-</p>
        <div
          className="reserve-table"
          id="reserve-table"
          onClick={this.handleClick}
        >
          RESERVE A TABLE
        </div>
      </div>
    );
  };

  renderFunction = () => {
    const { services, guest, createBooking } = this.props;
    const { diningChoice } = this.state;
    if (!diningChoice) {
      return this.renderRoomServiceOrReserveTable();
    } else if (diningChoice === "reserve-table") {
      return (
        <DiningScreen2
          services={services}
          guest={guest}
          createBooking={createBooking}
        />
      );
    } else if (diningChoice === "room-service") {
      return (
        <DiningScreen3
          services={services}
          guest={guest}
          createBooking={createBooking}
        />
      );
    }
  };

  render() {
    return (
      <div>
        <div>header</div>
        {this.renderFunction()}
        <div>footer</div>
      </div>
    );
  }
}
