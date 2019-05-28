import React from "react";
import DiningReservationScreen from "./DiningReservationScreen";
import RoomServiceScreen from "./RoomServiceScreen";
import ConfirmRoomServiceScreen from "./ConfirmRoomServiceScreen";

export default class DiningScreen extends React.Component {
  state = {
    diningChoice: null,
    order: [],
    switchToDining4: false
  };

  handleClick = event => {
    this.setState({
      diningChoice: event.target.id
    });
  };

  saveOrder = order => {
    this.setState({
      order: order,
      switchToDining4: true
    });
  };

  editOrder = food => {
    // debugger
    const { order } = this.state;
    const filteredFood = order.filter(order => order !== food);
    this.setState({
      order: filteredFood
    });
  };

  renderRoomServiceOrReserveTable = () => {
    const { handleClick } = this;
    return (
      <div className="dining-screen">
        <div className="room-service" id="room-service" onClick={handleClick}>
          ROOM SERVICE
        </div>
        <p>-or-</p>
        <div className="reserve-table" id="reserve-table" onClick={handleClick}>
          RESERVE A TABLE
        </div>
      </div>
    );
  };

  // handleReturnButtonClick = () => {
  //   this.props.clearAmenity()
  // }

  renderFunction = () => {
    const { services, guest, createBooking, clearAmenity } = this.props;
    const { diningChoice, switchToDining4, order } = this.state;
    const { saveOrder, editOrder } = this;
    if (!diningChoice) {
      return this.renderRoomServiceOrReserveTable();
    } else if (diningChoice === "reserve-table") {
      return (
        <DiningReservationScreen
          services={services}
          guest={guest}
          createBooking={createBooking}
          clearAmenity={clearAmenity}
        />
      );
    } else if (diningChoice === "room-service") {
      if (!switchToDining4) {
        return (
          <RoomServiceScreen
            services={services}
            guest={guest}
            saveOrder={saveOrder}
            clearAmenity={clearAmenity}
          />
        );
      } else {
        return (
          <ConfirmRoomServiceScreen
            editOrder={editOrder}
            order={order}
            createBooking={createBooking}
            clearAmenity={clearAmenity}
          />
        );
      }
    }
  };

  // render() {
  //   return <div>{this.renderFunction()}</div>;
  // }
  render() {
    return (
      <div className="dining">
        <div className="dining-header">Dining</div>
        {this.renderFunction()}
      </div>);
  }
}
