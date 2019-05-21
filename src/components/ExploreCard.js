import React from 'react'

export default class ExploreCard extends React.Component {


  render () {

    const {attraction} = this.props;
    let divStyle = {
      background: `url(${attraction.image})`,
	    backgroundRepeat: "no-repeat",
	    backgroundSize: "cover",
	    backgroundPosition: "center"
    }

    return (
      <div className="explore-card" style={divStyle}>
        <h1>{attraction.attraction_name}</h1>
      </div>
    )
  }
}

// <img className="attraction-img" src={attraction.image} alt='none'/>
// <div className="container">
//
//   <p className="attraction-desc">{attraction.description}</p>
// </div>
