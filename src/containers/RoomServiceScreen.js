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
    const { services, guest, createBooking, handleReturnButtonClick } = this.props;
    const { collectOrder, handleClick } = this;
    return (
      <div>
        <div>header</div>
        <div>Select your order</div>
        <MenuContainer
          services={services}
          guest={guest}
          createBooking={createBooking}
          collectOrder={collectOrder}
        />
        <button
          className="next-button"
          onClick={handleReturnButtonClick}
          type="button"
        >
        ←
        </button>
        <span className="main-menu-label">MAIN MENU</span>

        <span className="order-label"> ORDER</span>
        <button
          className="next-button"
          type="button"
          onClick={handleClick}>
          →
        </button>
        <div>footer</div>
      </div>
    );
  }
}
