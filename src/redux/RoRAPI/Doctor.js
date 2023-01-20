import axios from 'axios';
import BASEURL from '../URL_API';

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

// Delete Doctor
const Delete = async (DoctorId, authorization) => {
  const AuthorizedOptions = {
    headers: {
      ...options.headers,
      authorization,
    },
  };

  const res = await axios.delete(`${BASEURL}doctors/${DoctorId}`, AuthorizedOptions);

  const answer = res.data;
  return answer;
};

const DoctorsAPI = {
  fetch,
  Delete,
};

export default DoctorsAPI;
