import '../src/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CarSearch from "./components/Car/Car Search/CarSearch"
import Contact from "./components/Contact/Contact"
import Car from '../src/components/Car/Car';
import Home from './components/Home/Home';

function App() {
  return (
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
  );
}

export default App;
