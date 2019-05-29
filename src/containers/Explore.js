import React from 'react'
import api from '../api'
import ExploreCard from '../components/ExploreCard'

export default class Explore extends React.Component {

  state = {
    attractions: []
  }

  componentDidMount () {
    api.getAttractions()
      .then(attractions => this.setState({ attractions }));
  }

  render () {
    const { attractions } = this.state
    return (
      <div className="explore-screen">
        <div className="explore-header">Explore</div>
        <div className="explore-card-container">
          <div className="wrap">
            {attractions.map(attraction => <ExploreCard attraction={attraction} key={attraction.id}/>)}
          </div>
        </div>
      </div>
    )
  }
}
