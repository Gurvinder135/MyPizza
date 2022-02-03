import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";

import Cart from "./components/Cart";
import Pizza from "./components/Pizza";
import Main from "./components/Main";
import Mininav from "./components/Mininav";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />}></Route>

          <Route path="*" element={<Mininav />}>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="pizza/:id" element={<Pizza />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
