import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import { Provider } from "react-redux";
import store from "./bootstrap/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/task_one" element={<HomePage />}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
