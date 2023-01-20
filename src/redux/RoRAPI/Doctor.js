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

// Add Doctor
const Add = async (data, authorization) => {
  const optionsAdd = {
    headers: {
      accept: 'application/json',
    },
  };
  const CurrentUserOptions = {
    headers: {
      ...optionsAdd.headers,
      authorization,
    },
  };

  const answer = await axios.post(
    BASEURL + DIRECTION,
    data,
    CurrentUserOptions,
  );

  return answer.data;
};

const DoctorsAPI = {
  fetch,
  Delete,
  Add,
};

export default DoctorsAPI;
