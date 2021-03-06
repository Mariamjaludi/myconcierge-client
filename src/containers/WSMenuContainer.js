import React from "react";
import MenuItem from "../components/MenuItem";
export default class WSMenuContainer extends React.Component {

  renderMenuItems = items => {
    // debugger
    const { collectOrder } = this.props;
    return (
      <div key={items[0].service_type}>
        <div className="type-label">{items[0].service_type.toUpperCase()}</div>
        <div className="menu-items">
          {items.map(item => (
            <MenuItem item={item} collectOrder={collectOrder} key={item.id}/>
          ))}
        </div>
      </div>
    );
  };

  render() {
    const { handleClick, services, categorizeServices } = this.props;
    const { renderMenuItems } = this;
    const catServices = categorizeServices(services)
    return (
      <div className="ws-menu-container">
        <div className="select-order-lbl">Select your order</div>
        <div className="ws-menu">
          {catServices.map(cs => renderMenuItems(cs))}
        </div>
        <div className="btn-div">
          <button
            className="ws-order-btn"
            type="button"
            onClick={handleClick}>
            Order
          </button>
        </div>
      </div>
    );
  }
}

// <div className="order-btn">
//   <button
//     className="next-button"
//     type="button"
//     onClick={handleClick}>
//     →
//   </button>
