import React from 'react'

export default class DiningScreen3 extends React.Component {

  render(){
    const {amenity} = this.props
    const services = amenity.services
    const starters = services.filter(service => service.service_type === "Starter")
    const mains = services.filter(service => service.service_type === "Main")
    const  desserts = services.filter(service => service.service_type === "Dessert")
    return (
      <div>
        <div>Select your order</div>
        <div>STARTERS
          {starters.map(starter => <div>{starter.service_name}</div>)}
        </div>
        <div>MAIN
        {mains.map(main => <div>{main.service_name}</div>)}
      </div>
        <div>DESSERT
        {desserts.map(dessert => <div>{dessert.service_name}</div>)}</div>
      </div>
    )
  }
}
