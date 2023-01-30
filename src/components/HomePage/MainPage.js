import '../../styles/App.scss';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import ItemsList from '../DoctorsData/ItemObject';
import NavBar from '../NavBar/Navbar';
import * as AuthSlice from '../../redux/Auth/AuthSlice';
import { loadLocalStorage } from '../../redux/localStorage/storage';
import * as DoctorsSlice from '../../redux/Doctors/DoctorsSlice';
import loadingStatus from '../../redux/reduxConst';
import './doctors.css';

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

  // scroll to the right
  const scrollRight = () => {
    const container = document.querySelector('.scroll_content');
    container.scrollLeft += container.offsetWidth / 2;
    // if inactive disable the button
    if (container.scrollLeft >= container.scrollWidth - container.offsetWidth) {
      document.querySelector('.right').classList.add('disable');
    } else {
      document.querySelector('.right').classList.remove('disable');
    }
  };

  // scroll to the left
  const scrollLeft = () => {
    const container = document.querySelector('.scroll_content');
    container.scrollLeft -= container.offsetWidth / 2;
    // if inactive add disable attribute
    if (container.scrollLeft === 0) {
      document.querySelector('.left').classList.add('disable');
    } else {
      document.querySelector('.left').classList.remove('disable');
    }
  };

  if (doctors.loading === loadingStatus.pending || auth.loading === loadingStatus.pending) {
    return (
      <>
        <section className="Splash_container d-flex align-items-center placeholder-wave background_blur" />
        <div className="position-absolute top-50 start-50 translate-middle">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <>

      <div>
        <NavBar name={`Welcome ${auth.user.userName}`} />
      </div>
      <div className="app-container">

        <div className="doctors_sect">

          <p className="page_title">
            <span className="available_docs">AVAILABLE DOCTORS</span>
            <span className="select">Please select a doctor</span>
          </p>
        </div>

        <div className="content_div">
          {/* scroll left arrow */}
          <div className="arrow_div">
            <button type="button" className="arrow left" onClick={scrollLeft}>
              <BiLeftArrow className="left_arrow" />
            </button>
          </div>
          <div className="cover_div">
            <div className="scroll_content">
              {doctors.list.map((data) => (
                <div key={`${data.id}_${data.name}`} className="doctors_div">
                  <Link to="/Details" state={{ doc_id: data.id }}>
                    <ItemsList data={data} id={data.name} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <button type="button" className="arrow right" onClick={scrollRight}>
              <BiRightArrow />
            </button>
          </div>
        </div>
      </div>

    </>

  );
};

export default MainPage;
