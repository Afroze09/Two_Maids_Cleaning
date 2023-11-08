import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import CustomNavbar from "./Components/Navbar";
import CustomFooter from "./Components/Footer";
import Book from "./Pages/Book";
import Services from "./Pages/Services";
const App = () => {
  return (
    <div className="h-screen w-screen relative">
      <BrowserRouter>
        {/* <CustomNavbar /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/book" element={<Book />} />
          <Route path="/services" element={<Services />}/>
        </Routes>

        <CustomFooter />
      </BrowserRouter>
    </div>
  );
};

export default App;
