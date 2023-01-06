import '../App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../redux/download/dataSlice';

const MainPage = () => {
  const dispatch = useDispatch();
  const greetingShow = useSelector((store) => store.doctorsData);

  useEffect(() => {
    if (!greetingShow.length) {
      dispatch(getMessage());
    }
  });

  return (
    <div className="container">

      <ul>

        {greetingShow.map((data) => (
          <li key={data.name} className="container">
            <p>{data.name}</p>
            <p>{data.address}</p>
            <img src={data.img} alt={data.name} className="img_container" />
          </li>
        ))}

      </ul>

    </div>
  );
};

export default MainPage;
