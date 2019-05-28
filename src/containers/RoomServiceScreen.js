import React from "react";
import MenuContainer from "./MenuContainer";
export default class RoomServiceScreen extends React.Component {
  state = {
    order: []
  };

  collectOrder = order => {
    this.setState({
      order: [...this.state.order, order]
    });
  };

  handleClick = () => {
    this.props.saveOrder(this.state.order);
  };

  render() {
    const { services, guest, createBooking, clearAmenity } = this.props;
    const { collectOrder, handleClick } = this;
    return (
      <div className="dining-room-service">
        <div className="room-service-header">Room Service Menu</div>
        <div className="select-order-label">Select your order</div>
        <MenuContainer
          services={services}
          guest={guest}
          createBooking={createBooking}
          collectOrder={collectOrder}
        />
        <div className="btn-div">
          <button
            className="rs-order-btn"
            type="button"
            onClick={handleClick}>
            Order
          </button>
        </div>
      </div>
    );
  }
}
