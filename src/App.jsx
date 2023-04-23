import Home from "./pages/Home";
import Bags from "./pages/Bags";
import Sneakers from "./pages/Sneakers";
import Belts from "./pages/Belts";
import Addidas from "./pages/Addidas"
import Latest from "./pages/Latest"
import Featured from "./pages/Featured";
import Login from "./pages/auth/Login";


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
        </Routes>
      </BrowserRouter>
    </>

  );
}
export default App
