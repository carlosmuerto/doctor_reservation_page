/* eslint-disable no-console */
import axios from 'axios';

// const BASEURL = 'http://localhost:3000/users/current';

// const options = {
//   headers: {
//     accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// };

const currentUser = async () => {
  // const currenUserOptions = {
  //   headers: {
  //     ...options.headers,
  //     authorization,
  //   },
  // };

  console.log('llamando función');

  const answer = await axios.get('http://localhost:3000/users/current');

  const user = answer.data;
  user.token = answer.headers.authorization;
  console.log(user);

  return user;
};

const CheckUser = {
  currentUser,
};

export default CheckUser;
