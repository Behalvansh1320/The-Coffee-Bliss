import "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./Pages/home";
import About from "./Pages/about";

import Footer from "./components/footer";
import Menu from "./Pages/menu";
import Orders from "./Pages/order";
import HelpSupport from "./Pages/help";
import Locations from "./Pages/location";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/help" element={<HelpSupport />} />
        <Route path="/location" element={<Locations />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
