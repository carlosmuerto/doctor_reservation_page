import axios from 'axios';

const BASEURL = 'http://localhost:3000';

const options = {
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const currentUser = async () => {
  const answer = await axios.get(`${BASEURL}/users/current`, {}, options);

  const user = answer.data;
  user.token = answer.headers.authorization;

  return user;
};

export default currentUser;
