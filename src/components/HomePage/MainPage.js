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
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import { loadLocalStorage } from '../../redux/localStorage/storage';
import * as DoctorsSlice from '../../redux/Doctors/DoctorsSlice';
import loadingStatus from '../../redux/reduxConst';

const MainPage = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((store) => store.doctors);
  const auth = useSelector((store) => store.Auth);

  useEffect(() => {
    if (auth.loading !== loadingStatus.succeeded && auth.loading !== loadingStatus.failed) {
      dispatch(
        AuthSlice.load(loadLocalStorage()),
      );
    }
  }, [dispatch, auth]);

  useEffect(() => {
    if (auth.loading === loadingStatus.succeeded) {
      dispatch(
        DoctorsSlice.fetch(auth.user),
      );
    }
  }, [dispatch, auth]);

  return (
    <>
      <section className="Splash_container " />

      <div>
        <NavBar name={`Welcome ${auth.user.userName}`} />

        <Swiper
          effect="cards"
          grabCursor
          modules={[EffectCards]}
          className="mySwiper position-absolute top-50 start-50 translate-middle"
        >

          {doctors.list.map((data) => (
            <SwiperSlide key={`${data.id}_${data.name}`} className="">

              <Link to="/Details" state={{ doc_id: data.id }}>

                <ItemsList data={data} id={`${data.id}_${data.name}`} />

              </Link>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </>
  );
};

export default MainPage;
