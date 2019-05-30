import React from 'react'
import api from '../api'
export default class Billing extends React.Component {

  state = {
    bookings: []
  }

  componentDidMount(){
    const {guest} = this.props
    const guestId = guest.id
    api.getBookings(guestId)
    .then(guest => this.setState({bookings: guest.bookings}))
  }

  getRoom = () => {
    const {hotel, guest} = this.props
    let room = hotel.rooms.find(room => room.id === guest.room_id)
    return room
  }

  getTotal = () => {
    const {bookings} = this.state
    let sum = 0
    bookings.forEach( booking => sum += booking.service.price )
    const roomNightlyCost = this.getRoom().cost_per_night
    const totalRoomCost = roomNightlyCost * (this.props.guest.days_stayed)
    sum = sum + totalRoomCost
    return sum
  }

  displayBookings = (amenityName) => {
    // debugger;
    const {bookings} = this.state
    const {hotel} = this.props
    const amenity = hotel.amenities.find(amenity => amenity.amenity_name === amenityName)
    const amenityServicesIds = amenity.services.map( service => service.id )
    let filteredBookings = bookings.filter(booking => amenityServicesIds.includes(booking.service.id))
    if (amenityName === 'Dining')
    {
      filteredBookings = filteredBookings.filter(booking => booking.service.service_name !== "Reserve Table")
    }
    if (filteredBookings.length !== 0) {
      return (
        <div className="amenity-booking-summary">
          <div className="amenity-header">{amenityName}</div>
          {filteredBookings.map(booking =>
            <div className="booking-details">
              <div className="service-name">{booking.service.service_name}</div>
              <div className="service-date-time">{booking.booking_date} {booking.booking_time}</div>
              <div className="service-price">£{booking.service.price}</div>
            </div>)
          }
        </div>
      )
    }
  }

  render () {
    const {guest, hotel} = this.props
    const {getRoom, displayBookings} = this
    // debugger
    if (guest && hotel )
    {
      const room = getRoom()
      return (
        <div className="Billing-screen">
          <div className="Billing-header">Billing</div>
          <div className="Billing-content">
            <div className="guest-info">
              <div className="guest">Guest: {guest.guest_name}</div>
              <div className="check-in">Check-in date: {guest.check_in}</div>
            </div>
            <div className="room-info">
              <div className="room-booking-label">Room Booking</div>
              <div className="room-meta">
                <div className="room-type">{room.room_type}</div>
                <div className="cost">£ {room.cost_per_night} (per night)</div>
                <div className="days-stayed">Days stayed: {guest.days_stayed}</div>
              </div>
            </div>
            <div className="booking-tbl">
            {displayBookings("Dining")}
            {displayBookings("Wellness")}
            {displayBookings("Salon")}
            </div>
            <div className="total-value">Total: £{this.getTotal()}</div>
          </div>
        </div>
      )
    } else return <div />
  }
}





//
