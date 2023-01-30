import axios from 'axios';
import BASEURL from '../URL_API';

const DIRECTION = 'users/current';

const options = {
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const currentUser = async (userStored) => {
  const authorization = userStored.token;

  const CurrentUserOptions = {
    headers: {
      ...options.headers,
      authorization,
    },
  };
  const answer = await axios.get(BASEURL + DIRECTION, CurrentUserOptions);
  const user = answer.data;

  user.token = authorization;
  return user;
};

const CheckUser = {
  currentUser,
};

export default CheckUser;
