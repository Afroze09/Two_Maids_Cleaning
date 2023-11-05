import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Navbar from './Components/Navbar';
import CustomFooter from './Components/Footer';
import Modal from './Components/Modal';

const App = () => {
        const [modalVisible, setModalVisible] = useState(false);

        const handleScroll = () => {
          const navbarHeight = document.querySelector('#navbar').clientHeight;
          const footerTop = document.querySelector('.footer').getBoundingClientRect().top;
          const scrollY = window.scrollY;
      
          if (scrollY >= navbarHeight && footerTop > window.innerHeight) {
            setModalVisible(true);
          } else {
            setModalVisible(false);
          }
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
        return (
                <div className='h-screen w-screen relative'>
                        <BrowserRouter>
                                <Navbar />
                               <Modal show={modalVisible} />
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
