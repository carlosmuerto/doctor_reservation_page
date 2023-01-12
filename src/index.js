import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import './styles/Swiper.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
