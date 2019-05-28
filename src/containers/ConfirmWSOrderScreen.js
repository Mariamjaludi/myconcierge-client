import React from 'react';
import SummaryWSItem from "../components/SummaryWSItem";

export default class ConfirmWSOrderScreen extends React.Component {

//calculates the total sum of the guest's order
  orderSum = () => {
    let sum = 0;
    this.props.order.forEach(order => (sum = sum + order.price));
    return sum.toFixed(2);
  };

  renderMenuItems = items => {
    // debugger
    const {editOrder} = this.props
    if (items.length > 0) {
      return (
        <div className="summary-items">
          {items.map(item => (
            <SummaryWSItem item={item} editOrder={editOrder} createBooking={this.props.createBooking} key={item.id}/>
          ))}
        </div>
      );
    }
  };

// {items[0].service_type.toUpperCase()}
  render () {
    const { order, clearAmenity, categorizeServices } = this.props
    const { renderMenuItems, orderSum } = this;
    // debugger
    return (
      <div className="confirm-ws-screen">
      <div className="your-order-div">Your Order</div>
      <form className="confirm-ws-form">
        {categorizeServices(order).map(serviceTypeGroup => renderMenuItems(serviceTypeGroup))}
      </form>
      <div className="total">Total: £{orderSum()}</div>
      </div>
    )
  }

}

// <button
//   className="next-button"
//   onClick={clearAmenity}
//   type="button"
// >
// ←
// </button>
