import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import SummaryWSItem from "../components/SummaryWSItem";

export default class ConfirmWSOrderScreen extends React.Component {

//calculates the total sum of the guest's order
  orderSum = () => {
    let sum = 0;
    this.props.order.forEach(order => (sum = sum + order.price));
    return sum.toFixed(2);
  };

  renderMenuItems = items => {
    const {editOrder} = this.props
    if (items.length > 0) {
      return (
        <div>
          {items[0].service_type.toUpperCase()}
          {items.map(item => (
            <SummaryWSItem item={item} editOrder={editOrder} createBooking={this.props.createBooking} key={item.id}/>
          ))}
        </div>
      );
    }
  };


  render () {
    const { order, clearAmenity, categorizeServices } = this.props
    const { renderMenuItems, orderSum } = this;
    return (
      <div>
      <div>Your Order</div>
      <form>
        {categorizeServices(order).forEach(serviceTypeGroup => renderMenuItems(serviceTypeGroup))}
        <hr />
        <div>Total: {orderSum()}</div>
      </form>
        <button
          className="next-button"
          onClick={clearAmenity}
          type="button"
        >
        ←
        </button>
        <span className="main-menu-label">MAIN MENU</span>
      </div>
    )
  }

}
