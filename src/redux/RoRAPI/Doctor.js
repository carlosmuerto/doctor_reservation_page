import axios from 'axios';

const BASEURL = 'http://localhost:3000';

const DIR = '/doctors';

const options = {
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

// const doctors = [
//   {
//     name: 'Dr.Simi',
//     address: '123 street',
//     img: 'https://pbs.twimg.com/profile_images/1505546875918864385/FI4JAeRG_400x400.jpg',
//   },
//   {
//     name: 'Farmacias Del Ahorro',
//     address: 'Vecindad Street',
//     img: 'https://vozdelasempresas.org/wp-content/uploads/2020/11/FDahorro2Vozz.png',
//   },
//   {
//     name: 'Dr.Simi 2',
//     address: '123 street',
//     img: 'https://pbs.twimg.com/profile_images/1505546875918864385/FI4JAeRG_400x400.jpg',
//   },
//   {
//     name: 'Farmacias Del Ahorro 2',
//     address: 'Vecindad Street',
//     img: 'https://vozdelasempresas.org/wp-content/uploads/2020/11/FDahorro2Vozz.png',
//   },
//   {
//     name: 'Dr.Simi 3',
//     address: '123 street',
//     img: 'https://pbs.twimg.com/profile_images/1505546875918864385/FI4JAeRG_400x400.jpg',
//   },
//   {
//     name: 'Farmacias Del Ahorro 3',
//     address: 'Vecindad Street',
//     img: 'https://vozdelasempresas.org/wp-content/uploads/2020/11/FDahorro2Vozz.png',
//   },
// ];

const fetch = async (authorization) => {
  const CurrentUserOptions = {
    headers: {
      ...options.headers,
      authorization,
    },
  };

  const answer = await axios.get(BASEURL + DIR, CurrentUserOptions);
  const doctors = answer.data;

  return doctors;
};

const DoctorsAPI = {
  fetch,
};

export default DoctorsAPI;
