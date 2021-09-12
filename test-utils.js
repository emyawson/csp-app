import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router } from 'react-router-dom';
import { connectRouter } from 'connected-react-router';
import { render } from '@testing-library/react';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { history } from './src/store';
import reducers from './src/store/reducer/index';

const createRootReducer = (reducerHistory) => combineReducers({
  router: connectRouter(reducerHistory),
  ...reducers,
});

// Setup redux persist
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(
  persistConfig,
  createRootReducer(history),
);

const renderWithRouter = (ui, options = {}, initialState) => ({
  ...render(
      <Provider store={createStore(persistedReducer, initialState)}>
        <Router history={history}>{ui}</Router>
      </Provider>,
  ),
});

const AllTheProviders = () => {};
const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, renderWithRouter };
