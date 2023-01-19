import axios from 'axios';

const BASEURL = 'http://localhost:3000/appointments';

const options = {
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const fetch = async (authorization) => {
  const CurrentUserOptions = {
    headers: {
      ...options.headers,
      authorization,
    },
  };

  const answer = await axios.get(BASEURL, CurrentUserOptions);
  const appointments = answer.data;

  return appointments;
};

const AppointmentsAPI = {
  fetch,
};

export default AppointmentsAPI;
