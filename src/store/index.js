// Modules
// eslint-disable-next-line no-unused-vars
import { createBrowserHistory, createMemoryHistory } from 'history';
import {
  createStore, applyMiddleware, combineReducers, compose,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

// Sagas
import sagas from './sagas';
import reducers from './reducer/index';

// Setup
const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

// All reducer
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

// Middlewares
const middlewares = [routerMiddleware(history), sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  //  const { logger } = require(`redux-logger`);
  // Comment out the next line to remove redux-logs in browser console
  // middlewares.push(logger);
}

// Allow browser debugging
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Setup the store
const configureStore = (preloadedState) => createStore(
  persistedReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(...middlewares)),
);
const store = configureStore();
const persistor = persistStore(store);

// Init sagas
sagaMiddleware.run(sagas);

export { store, history, persistor };
