import React from "react";
import SummaryMenuItem from "../components/SummaryMenuItem";
export default class DiningOrderContainer extends React.Component {
  renderMenuItems = food => {
    const {editOrder} = this.props
    if (food.length > 0) {
      return (
        <div>
          {food.map(food => (
            <SummaryMenuItem food={food} editOrder={editOrder} key={food.id}/>
          ))}
        </div>
      );
    }
  };

  render() {
    const { order, editOrder } = this.props;
    // const { renderMenuItems } = this; 
    // const starters = order.filter(o => o.service_type === "Starter");
    // const mains = order.filter(o => o.service_type === "Main");
    // const desserts = order.filter(o => o.service_type === "Dessert");
    if (order.length > 0) {
      return (
        <div className="dining-orders">
          {order.map(o => (
            <SummaryMenuItem food={o} editOrder={editOrder} key={o.id}/>
          ))}
        </div>
      );
    }
  }
}
