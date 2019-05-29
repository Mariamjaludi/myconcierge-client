import React from 'react'

export default class NavLink extends React.Component {

  

  handleClick = () => {
    this.props.onLinkClick();
  };

  handleHover = () => {
    this.props.handleHover();
  }

  handleHoverOff = () => {
    this.props.handleHoverOff();
  }

  render (){
    const { amenity } = this.props;
    return (
      <div
        id={amenity.amenity_name}
        className="amenity-link"
        onClick={this.handleClick}
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleHoverOff}>
        {amenity.amenity_name}
      </div>
    )
  }
}
