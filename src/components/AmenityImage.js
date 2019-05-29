import React from 'react'

export default class AmenityImage extends React.Component {

  renderFunction = () => {
   // debugger
    const { amenity, view } = this.props;
    switch (view) {
      case "Explore":
        return <img className="explore-img" src="https://66.media.tumblr.com/64500e78ce2554216fba526f99ce09b0/tumblr_o1vcv5f6cN1sslvquo1_500.gif" alt="" />
      case "Account":
        return <img className="account-img" src="https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
      case "Dining":
      case "Housekeeping":
      case "Wellness":
      case "Chauffeur/Taxi":
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

// https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940
// <img src={`${amenity.image}`} />
  // <div className={`${view}-img`} style={divStyle}>test</div>
// <a href="http://freegifmaker.me/images/2fnC5/"><img src="http://i.freegifmaker.me/1/5/5/9/0/8/1559085517133828.gif?1559085544" alt="gifs website"/></a><br/><a href="http://www.freegifmaker.me/">FreeGifMaker.me<a/>
