// Sagas
import { all } from 'redux-saga/effects';

// All saga functions
import { watchFetchCMSTopics } from './pages';

export default function* rootSaga() {
  try {
    yield all([
      watchFetchCMSTopics(),
    ]);
  } catch (error) {
    // error management depending on production or dev environments
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('ERROR FROM ROOT SAGA', error);
    }
  }
}
