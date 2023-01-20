import axios from 'axios';
import BASEURL from '../URL_API';

// const BASEURL = 'http://localhost:3000';

const DIRECTION = 'doctors';

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

  const answer = await axios.get(BASEURL + DIRECTION, CurrentUserOptions);
  const doctors = answer.data;

  return doctors;
};

const DoctorsAPI = {
  fetch,
};

export default DoctorsAPI;
