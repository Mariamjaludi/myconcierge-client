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
    const { services, guest, createBooking } = this.props;
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
        <button type="button" onClick={handleClick}>
          next
        </button>
        <div>footer</div>
      </div>
    );
  }
}
