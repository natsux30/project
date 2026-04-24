import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./Pages/Home";
import Carrinho from "./Pages/Carrinho";
import Perfil from "./Pages/Perfil";
import Links from "./Pages/Links";
import Login from "./Pages/Login";
import './Style.css';
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/links" element={<Links />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;