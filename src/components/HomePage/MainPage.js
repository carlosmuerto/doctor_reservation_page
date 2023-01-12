import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../../styles/Swiper.scss';
import { EffectCards } from 'swiper';
import '../../styles/App.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../../redux/Greeting/Greeting';
import ItemsList from '../DoctorsData/ItemObject';
import NavBar from '../NavBar/Navbar';

function MainPage() {
  const dispatch = useDispatch();
  const greetingShow = useSelector((store) => store.doctorsData);

  useEffect(() => {
    if (!greetingShow.length) {
      dispatch(getData());
    }
  });

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

          {greetingShow.map((data) => (
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
