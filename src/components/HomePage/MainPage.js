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
import * as CurrentUser from '../../redux/Auth/CurrentUserSlice';
import { loadLocalStorage } from '../../redux/localStorage/storage';
import * as DoctorsSlice from '../../redux/Doctors/DoctorsSlice';
import loadingStatus from '../../redux/reduxConst';

const MainPage = () => {
  const dispatch = useDispatch();
  const doctors = useSelector((store) => store.doctors);
  const user = useSelector((store) => store.User.user);
  const UserLoading = useSelector((store) => store.User.loading);

  useEffect(() => {
    dispatch(
      CurrentUser.currentUser(loadLocalStorage()),
    );
  }, [dispatch]);

  useEffect(() => {
    if (UserLoading === loadingStatus.succeeded) {
      dispatch(
        DoctorsSlice.fetch(user),
      );
    }
  }, [dispatch, user, UserLoading]);

  return (
    <>
      <section className="Splash_container " />

      <div>
        <NavBar name={`Welcome ${user.userName}`} />

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
};

export default MainPage;
