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
          <p className="food-name"><strong>{food.service_name}</strong></p>
          <div className="price">{food.price}</div>
          <div onClick={this.handleClick}>remove</div>
      </div>
    )
  }
}
