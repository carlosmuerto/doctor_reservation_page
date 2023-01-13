import axios from 'axios';

const currentUser = async () => {
  const answer = await axios.get('http://localhost:3000/users/current');

  const user = answer.data;
  user.token = answer.headers.authorization;
  return user;
};

const CheckUser = {
  currentUser,
};

export default CheckUser;
