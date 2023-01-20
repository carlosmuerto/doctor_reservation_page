import axios from 'axios';
import BASEURL from '../URL_API';

const DIRECTION = 'appointments';

const options = {
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

// Get all appointments list
const fetch = async (authorization) => {
  const CurrentUserOptions = {
    headers: {
      ...options.headers,
      authorization,
    },
  };

  const answer = await axios.get(BASEURL + DIRECTION, CurrentUserOptions);
  const appointments = answer.data;

  return appointments;
};

// Add new
// eslint-disable-next-line no-unused-vars
const AddNew = async (doctorId, description, time, authorization) => {
  const AuthorizedOptions = {
    headers: {
      ...options.headers,
      authorization,
    },
  };

  const res = await axios.post(`${BASEURL}appointments`, {
    doctor_id: doctorId,
    description,
    datetime_of_appointment: time,
  }, AuthorizedOptions);

  const answer = res.data;
  return answer;
};

// Delete appointment
const Delete = async (AppointmentId, authorization) => {
  const AuthorizedOptions = {
    headers: {
      ...options.headers,
      authorization,
    },
  };

  const res = await axios.delete(`${BASEURL}appointments/${AppointmentId}`, AuthorizedOptions);

  const answer = res.data;
  return answer;
};

const AppointmentsAPI = {
  fetch,
  AddNew,
  Delete,
};

export default AppointmentsAPI;
