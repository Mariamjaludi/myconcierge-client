import React from "react";
import MenuItem from "../components/MenuItem";
export default class MenuContainer extends React.Component {
  renderMenuItems = food => {
    const { collectOrder } = this.props;
    return (
      <div className="menu-items">
        {food.map(food => (
          <MenuItem item={food} collectOrder={collectOrder} key={food.id}/>
        ))}
      </div>
    );
  };

  render() {
    const { services } = this.props;
    const { renderMenuItems } = this;
    const starters = services.filter(service => service.service_type === "Starter");
    const mains = services.filter(service => service.service_type === "Main");
    const desserts = services.filter(service => service.service_type === "Dessert");
    return (
      <div className="dining-menu">
        <div className="starter-label">Starters</div>
        {renderMenuItems(starters)}
        <div className="main-label">Main</div>
        {renderMenuItems(mains)}
        <div className="dessert-label">Dessert</div>
        {renderMenuItems(desserts)}
      </div>
    );
  }
}
