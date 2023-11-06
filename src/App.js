import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Navbar from "./Components/Navbar";
import CustomFooter from "./Components/Footer";
import Modal from "./Components/Modal";
import Book from "./Pages/Book";
const App = () => {
  return (
    <div className="h-screen w-screen relative">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/book" element={<Book />} />
        </Routes>

        <CustomFooter />
      </BrowserRouter>
    </div>
  );
};

export default App;
