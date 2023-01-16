/* eslint-disable no-console */
import axios from 'axios';

const BASEURL = 'http://localhost:3000/users/current';

const options = {
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const currentUser = async (authorization) => {
  const CurrentUserOptions = {
    headers: {
      ...options.headers,
      authorization,
    },
  };

  // console.log('TOKEN:', authorization);

  const answer = await axios.get(BASEURL, CurrentUserOptions);

  // console.log('answer.headers.auth:', answer.headers.authorization);

  const user = answer.data;

  // console.log('user:', user);

  user.token = authorization;

  // console.log('answer with token:', user);

  return user;
};

const CheckUser = {
  currentUser,
};

export default CheckUser;
