import React from "react";
import DiningReservationScreen from "./DiningReservationScreen";
import RoomServiceScreen from "./RoomServiceScreen";
import ConfirmRoomServiceScreen from "./ConfirmRoomServiceScreen";

export default class DiningScreen extends React.Component {
  state = {
    order: [],
    switchToDining4: false
  };

  handleClick = event => {
    this.props.clickToShowReserveOrRoomService(event.target.id)
    // this.setState({
    //   diningChoice: event.target.id
    // });
  };

  saveOrder = order => {
    this.setState({
      order: order
    });
    this.props.clicktoShowRSSummary()
  };

  editOrder = food => {
    // debugger
    let { order } = this.state;
    // const foundFood = order.find(o => o === food )
    let index = order.indexOf(food)
    // debugger
    order.splice(index, 1)
    // const filteredFood = order.filter(order => order !== food);
    this.setState({
      order: order
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

  renderFunction = () => {
    const { services, guest, createBooking, clearAmenity, diningChoice, showRSSummary } = this.props;
    const { switchToDining4, order } = this.state;
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
      if (!showRSSummary) {
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
