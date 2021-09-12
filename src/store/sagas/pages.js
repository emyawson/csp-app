// Modules
import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import transformerData from '../../utils/transformer';
// Api
import { getPages } from '../../services/api';
import markets from '../../../config/markets';
// action constants
import {
  FETCH_CMS_REQUEST,
  FETCH_CMS_SUCCCESS,
  FETCH_CMS_ERROR,
} from '../actions';
import { ROUTE_ERROR_PAGE } from '../../constants/routes';

const marketName = process.env.REACT_APP_CURRENT_MARKET_CONFIG;

// Saga
export function* handleFetchCMSTopics() {
  try {
    const { data } = yield call(getPages, {
      market: markets[marketName].market,
      environment: markets[marketName].environment,
    });

    const { HomepageID } = markets[marketName];

    const dataSource = data.items.filter(({ id }) => id === HomepageID)[0];

    const appData = transformerData(dataSource);

    yield put({ type: FETCH_CMS_SUCCCESS, payload: appData });
  } catch (error) {
    yield put({ type: FETCH_CMS_ERROR, payload: error });
    if (error.response.status === 500) {
      yield put(push(ROUTE_ERROR_PAGE));
    }

    if (error.response.status >= 400 && error.response.status <= 499) {
      yield put(push(ROUTE_ERROR_PAGE));
    }
  }
}

export function* watchFetchCMSTopics() {
  yield takeEvery(FETCH_CMS_REQUEST, handleFetchCMSTopics);
}
