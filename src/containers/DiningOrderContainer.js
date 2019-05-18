import React from "react";
import SummaryMenuItem from "../components/SummaryMenuItem";
export default class DiningOrderContainer extends React.Component {
  renderMenuItems = food => {
    const {editOrder} = this.props
    if (food.length > 0) {
      return (
        <div>
          {food[0].service_type.toUpperCase()}
          {food.map(food => (
            <SummaryMenuItem food={food} editOrder={editOrder}/>
          ))}
        </div>
      );
    }
  };

  render() {
    const { order } = this.props;
    const { renderMenuItems } = this;
    const starters = order.filter(o => o.service_type === "Starter");
    const mains = order.filter(o => o.service_type === "Main");
    const desserts = order.filter(o => o.service_type === "Dessert");
    return (
      <div>
        {renderMenuItems(starters)}
        {renderMenuItems(mains)}
        {renderMenuItems(desserts)}
      </div>
    );
  }
}
