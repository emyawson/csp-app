import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import * as smoothscroll from 'smoothscroll-polyfill';
import { LOADING_PAGES, FETCH_CMS_REQUEST } from './store/actions';
import './index.scss';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

// App store
import { store, history, persistor } from './store';

// This is for smooth scrolling due to Safari compatibility
smoothscroll.polyfill();

const onBeforeLift = () => {
  // This is where we call functions:
  //  => that run on application start
  //  => that run in the background
  store.dispatch({ type: LOADING_PAGES, payload: true });
  store.dispatch({ type: FETCH_CMS_REQUEST });
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
        onBeforeLift={onBeforeLift}
      >
        <ConnectedRouter history={history}>
          <Router history={history}>
            <App />
          </Router>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// module.hot.accept();
