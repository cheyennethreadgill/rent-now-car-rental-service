import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../src/index.css"
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import CarSearch from "./components/Car Search/CarSearch"
import Contact from "./components/Contact/Contact"
import Car from "./components/Car"
import cars from "./components/Car";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/Products/:productId"
          element={<Car />}
        ></Route>
        <Route
          path="/CarSearch/Products/:productId"
          element={<Car />}
        ></Route>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/CarSearch"
          element={<CarSearch />}
        />
        <Route
          path="/Contact"
          element={<Contact />}
        />
        <Route
          path="/Car"
          element={<Car />}
        />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
