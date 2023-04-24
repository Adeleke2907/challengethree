import Home from "./pages/Home";
import Bags from "./pages/Bags";
import Sneakers from "./pages/Sneakers";
import Belts from "./pages/Belts";
import Addidas from "./components/Home/Addidas";
import Latest from "./components/Home/Latest";
import Featured from "./components/Home/Featured";
import Login from "./pages/auth/Login";
import Product from "./components/Home/Product";
import Producttools from "./pages/Producttools";
import Cart from "./components/Home/Cart";


import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/sneakers" element={<Sneakers />} />
          <Route path="/belts" element={<Belts />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/Addidas" element={<Addidas />} />
          <Route path="/Latest" element={<Latest />} />
          <Route path="/Featured" element={<Featured />} />
          <Route path="/product" element={<Product />} />
          <Route path="/producttools" element={<Producttools />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}
export default App
