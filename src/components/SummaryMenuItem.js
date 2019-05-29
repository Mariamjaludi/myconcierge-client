import React from 'react'
export default class SummaryMenuItem extends React.Component {

  handleClick = (event) => {
    const {food, editOrder} = this.props
    editOrder(food)
  }

  render(){
    const {food} = this.props
    return (
      <div className="menu-item" >
          <div className="food-name">{food.service_name}</div>
          <div className="price">{food.price}</div>
          <div className="remove" onClick={this.handleClick}>remove</div>
      </div>
    )
  }
}
