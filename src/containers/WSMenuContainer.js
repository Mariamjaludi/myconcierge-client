import React from "react";
import MenuItem from "../components/MenuItem";
export default class WSMenuContainer extends React.Component {

  renderMenuItems = items => {
    // debugger
    const { collectOrder } = this.props;
    return (
      <div>
        {items[0].service_type.toUpperCase()}
        {items.map(item => (
          <MenuItem item={item} collectOrder={collectOrder} key={item.id}/>
        ))}
      </div>
    );
  };

  render() {
    const { handleClick, clearAmenity, services, categorizeServices } = this.props;
    const { renderMenuItems } = this;
    const catServices = categorizeServices(services)
    // debugger
    return (
      <div className="wellness-menu-container">
        <div>Select your order</div>
        {catServices.map(cs => renderMenuItems(cs))}
        <button
          className="next-button"
          onClick={clearAmenity}
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
      </div>
    );
  }
}
