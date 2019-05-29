import React from 'react'
import WSMenuContainer from './WSMenuContainer'
import ConfirmWSOrderScreen from  './ConfirmWSOrderScreen'
export default class WellnessAndSalonScreen extends React.Component {
  state = {
    order: []
  }

  collectOrder = order => {
    this.setState({
      order: [...this.state.order, order]
    });
  };

  editOrder = item => {
    let { order } = this.state;
    // const foundFood = order.find(o => o === food )
    let index = order.indexOf(item)
    // debugger
    order.splice(index, 1)
    // const filteredFood = order.filter(order => order !== food);
    this.setState({
      order: order
    });
  };

  // handleClick = () => {
  //   this.setState({switchToConfirmScreen: true})
  // };

  categorizeServices = (services) => {
    //get an array of service types
    // debugger
    let serviceTypes = services.map( service => service.service_type )
    //make them unique
    serviceTypes = [...new Set(serviceTypes)]

    let allServices = []
    //get an array of nested arrays. Each nested array holds services with a specific type (serviceTypeGroup).
    serviceTypes.forEach( serviceType => {
      allServices = [...allServices, services.filter(service => service.service_type === serviceType)]
    })

    return allServices
  }

  render () {
    const { services, guest, createBooking, clearAmenity, amenityName } = this.props;
    const { order } = this.state
    const { collectOrder, handleClick, editOrder, categorizeServices } = this;
    return (
      <div className="wellness-salon-screen">
        <div className="ws-header">{amenityName}</div>
        <div className="ws-content">
          { !this.props.showConfirmation ?
          <WSMenuContainer
            services={services}
            guest={guest}
            createBooking={createBooking}
            collectOrder={collectOrder}
            handleClick={this.props.clickToShowConfirmation}
            clearAmenity={clearAmenity}
            categorizeServices={categorizeServices}
          /> :
          <ConfirmWSOrderScreen
            order={order}
            clearAmenity={clearAmenity}
            editOrder={editOrder}
            createBooking={createBooking}
            categorizeServices={categorizeServices}
          />
          }
        </div>
      </div>
    );
  }
}
