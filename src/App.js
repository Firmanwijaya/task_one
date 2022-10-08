import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
// import DetailPage from "./pages/DetailPage";
import { Provider } from "react-redux";
// import store from "./bootstrap/store";

import { applyMiddleware, combineReducers, createStore } from "redux";
import mySaga from "./bootstrap/sagas";
import reducers from "./bootstrap/reducers";
import createSagaMiddleware from "redux-saga";
import "bootstrap/dist/css/bootstrap.min.css";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ reducers });
const stores = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

function App() {
  return (
    <div className="App">
      <Provider store={stores}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              {/* <Route path="/detail" element={<DetailPage />}></Route> */}
            </Routes>
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
