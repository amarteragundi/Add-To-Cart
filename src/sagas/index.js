import { put, all, call } from "redux-saga/effects";
import { PRODUCTS_LIST } from "../consts";

function* fetchProducts() {
  const data = yield fetch(
    "https://api.jsonbin.io/b/5eabe67d07d49135ba48b4d6",
    {
      headers: {
        "secret-key":
          "$2b$10$VUeBB31uEH.4dFKQ0Gh.xu868hBSiepNDjI3LGPv9G/YzOUdOFz2C"
      }
    }
  ).then(response => response.json());
  yield put({ type: PRODUCTS_LIST, data: data });
}

export default function* rootSaga() {
  yield all([call(fetchProducts)]);
}
