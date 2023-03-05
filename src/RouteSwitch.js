import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import Navbar from "./Navbar";

const RouteSwitch = () => {
  const [items, setItems] = useState(0);

  return (
    <BrowserRouter>
      <Navbar items={items} />
      <Routes>
        <Route path="/" element={<App items={items} setItems={setItems} />} />
        <Route
          path="/cart"
          element={<Cart items={items} setItems={setItems} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
