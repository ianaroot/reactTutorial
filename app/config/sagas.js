import { takeEvery, select, call, put } from 'redux-saga/effects';

// 1 swap currency
// 2 base currency change
// 3 initial app load

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_ERROR, CONVERSION_RESULT } from '../actions/currencies';

export const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base=${currency}`);

const fetchLatestConversionRates = function* (action) {
  try {
    let currency = action.currency;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();
    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (error) {
    yield put({ type: CONVERSION_ERROR, error: error.message });
  }
};

export default rootSaga = function* rootSaga() {
  console.log("yield1")
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  console.log("yield2")
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  console.log("yield3")
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates);
}
