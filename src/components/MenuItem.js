import React from 'react'

export default class MenuItem extends React.Component{

  handleClick = () => {
    const {item, collectOrder} = this.props
    collectOrder(item)
  }
  render(){
    // debugger
    const {item} = this.props
    return (
      <div className="menu-item" onClick={this.handleClick}>
          <p className="item-name">{item.service_name}</p>
          <div className="description">{item.description}</div>
          <div className="price">{item.price}</div>
      </div>
    )
  }
}
