import React from 'react'
import ExploreCard from '../components/ExploreCard'
const ATTRACTIONS_API = 'http://localhost:3000/attractions'
export default class Explore extends React.Component {

  state = {
    attractions: []
  }

  componentDidMount () {
    fetch(ATTRACTIONS_API)
      .then(resp => resp.json())
      .then(attractions => this.setState({ attractions }));
  }

  render () {
    const { attractions } = this.state
    return (
      <div className="explore-card-container">
        <div className="wrap">
          {attractions.map(attraction => <ExploreCard attraction={attraction} key={attraction.id}/>)}
        </div>
      </div>
    )
  }
}
