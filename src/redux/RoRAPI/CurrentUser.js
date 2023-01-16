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

  const answer = await axios.get(BASEURL, CurrentUserOptions);
  const user = answer.data;
  user.token = authorization;
  return user;
};

const CheckUser = {
  currentUser,
};

export default CheckUser;
