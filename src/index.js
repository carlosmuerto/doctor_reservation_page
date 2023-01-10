import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/configureStore';
import { getMessage } from './redux/download/dataSlice';

store.dispatch(getMessage());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
      <h1>asdfasdfasdffs</h1>
    </Provider>
  </React.StrictMode>,
);
