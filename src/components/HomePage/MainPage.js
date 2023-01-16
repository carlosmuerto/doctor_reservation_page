import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../../styles/Swiper.scss';
import { EffectCards } from 'swiper';
import '../../styles/App.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ItemsList from '../DoctorsData/ItemObject';
import NavBar from '../NavBar/Navbar';
import * as DoctorsSlice from '../../redux/Doctors/DoctorsSlice';

function MainPage() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.Auth.user);
  const doctors = useSelector((store) => store.doctors);

  useEffect(() => {
    dispatch(
      DoctorsSlice.fetch(user),
    );
  }, [user, dispatch]);

  return (
    <>
      <section className="Splash_container " />

      <div>
        <NavBar name="Home Page" />

        <Swiper
          effect="cards"
          grabCursor
          modules={[EffectCards]}
          className="mySwiper position-absolute top-50 start-50 translate-middle"
        >

          {doctors.list.map((data) => (
            <SwiperSlide key={data.name} className="">

              <Link to="/Details" state={{ state: data }}>

                <ItemsList data={data} id={data.name} />

              </Link>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </>
  );
}

export default MainPage;
