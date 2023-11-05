import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Navbar from './Components/Navbar';
import CustomFooter from './Components/Footer';

const App = () => {
        return (
                <div className='h-screen w-screen'>
                        <BrowserRouter>
                                <Navbar />
                                <Routes>
                                        <Route path='/' element={<Home />}></Route>
                                        <Route path='/aboutUs' element={<AboutUs />} />
                                </Routes>
                                
                               <CustomFooter />
                                        
                        </BrowserRouter>
                </div>
        );
}

export default App;
