import React from 'react'

export default class NavLink extends React.Component {

  handleClick = () => {
    this.props.onLinkClick();
  };

  // handleHover = () => {
  //   this.props.onLinkHover();
  // }

  render (){
    const { amenity } = this.props;
    return (
      <div id={amenity.amenity_name} className="amenity-link" onClick={this.handleClick}>
        {amenity.amenity_name}
      </div>
    )
  }
}
