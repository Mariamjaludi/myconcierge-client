import React from 'react'

export default class AmenityImage extends React.Component {

  renderFunction = () => {
    // let exploreDiv ={
    //   backgroundImage: "url(https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)"
    // }
    // let accountDiv = {
    //   backgroundImage: "url(https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"
    // }
    const { amenity, view } = this.props;
    switch (view) {
      case "Explore":
        return <img className="explore-img" src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt="" />
      case "Account":
        return <img className="account-img" src="https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
      case "Dining":
      case "Housekeeping":
      case "Wellness":
      case "Salon":
      case "Wake Up Call":
        return <img src={`${amenity.image}`} alt=""/>
      default: return null
    }
  }

  render () {
    // const { amenity, view } = this.props;
    // let divStyle = {
    //   background: `url(${amenity.image})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   height: "100vh",
    //   width: "100%"
    // };
    return this.renderFunction()
  }
}
// <img src={`${amenity.image}`} />
  // <div className={`${view}-img`} style={divStyle}>test</div>
