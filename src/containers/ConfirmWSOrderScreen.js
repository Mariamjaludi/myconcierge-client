import React from 'react';
import SummaryWSItem from "../components/SummaryWSItem";

export default class ConfirmWSOrderScreen extends React.Component {

//calculates the total sum of the guest's order
  orderSum = (orders) => {
    let sum = 0;
    orders.forEach(order => (sum = sum + order.price));
    return sum.toFixed(2);
  };

  renderMenuItems = (items, idx) => {
    // debugger
    const {editOrder} = this.props
    if (items.length > 0) {
      return (
        <div className="summary-items" key={idx}>
          {items.map((item, index) => (
            <SummaryWSItem item={item} editOrder={editOrder} createBooking={this.props.createBooking} key={item.id}/>
          ))}
        </div>
      );
    }
  };

// {items[0].service_type.toUpperCase()}
  render () {
    const { order, categorizeServices } = this.props
    const { renderMenuItems, orderSum } = this;
    // let orders = [...new Set(order)]
    // debugger
    return (
      <div className="confirm-ws-screen">
      <div className="your-order-div">Your Order</div>
      <form className="confirm-ws-form">
        { order.length > 0 ? categorizeServices(order).map((serviceTypeGroup, idx) => renderMenuItems(serviceTypeGroup, idx)) : null}
      </form>
      <div className="total">Total: £{orderSum(order)}</div>
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
