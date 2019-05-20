import React from 'react'

export default class MenuItem extends React.Component{

  handleClick = () => {
    const {food, collectOrder} = this.props
    collectOrder(food)
  }
  render(){
    const {food} = this.props
    return (
      <div className="menu-item" onClick={this.handleClick}>
          <p className="food-name"><strong>{food.service_name}</strong></p>
          <div className="description">{food.description}</div>
          <div className="price">{food.price}</div>
      </div>
    )
  }
}
