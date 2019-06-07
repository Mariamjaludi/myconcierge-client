const API_BASE_URL = `https://myconcierge-app-api.herokuapp.com`;
// const API_BASE_URL = `http://localhost:3000`;

const headers = {
  "Content-Type": "application/json",
  Accepts: "application/json"
};

const login = (guest_name, password) => {
  return fetch(`${API_BASE_URL}/auth/create`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ guest_name, password })
  }).then(res => res.json());
};

const getCurrentGuest = token => {
  return fetch(`${API_BASE_URL}/auth/show`, {
    headers: { ...headers, Authorization: token }
  }).then(res => res.json());
};

const getBookings = guestId => {
  return fetch(`${API_BASE_URL}/guests/${guestId}`).then(res => res.json());
};

const getHotels = () => {
  return fetch(`${API_BASE_URL}/hotels`).then(resp => resp.json());
};

const postBooking = (
  service_id,
  guest_id,
  booking_date,
  booking_time,
  num_of_guests
) => {
  return fetch(`${API_BASE_URL}/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      service_id,
      guest_id,
      booking_date,
      booking_time,
      num_of_guests
    })
  }).then(res => res.json());
};

const getAttractions = () => {
  return fetch(`${API_BASE_URL}/attractions`)
    .then(resp => resp.json())
}

export default {
  login,
  getCurrentGuest,
  getHotels,
  getBookings,
  postBooking,
  getAttractions
};
