import { applyMiddleware, combineReducers, createStore } from "redux";
import mySaga from "./sagas";
import reducers from "./reducers";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ reducers });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;