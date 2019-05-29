import React from 'react'

export default class MenuItem extends React.Component{

  state = {
    color: null
  }
  handleClick = () => {
    this.setState({
      color: "#DCDCDC"
    })
    const {item, collectOrder} = this.props
    collectOrder(item)
  }

  render(){
    const {item} = this.props
    let divStyle = {
      color: this.state.color
    }
    return (
      <div className="menu-item" onClick={this.handleClick} style={divStyle}>
          <p className="item-name">{item.service_name}</p>
          <div className="description">{item.description}</div>
          <div className="price">£{item.price}</div>
      </div>
    )
  }
}
