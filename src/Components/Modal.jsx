import React,{useState,useEffect} from 'react'
import EventButton from './EventButton'
import { Link } from 'react-router-dom'
export default function Modal() {
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
    <div className={`sm:h-[100px] h-[180px] w-screen bg-[#58c2ff] flex items-center fixed bottom-0 left-0 z-10 py-2 px-10 ${
        modalVisible ? 'translate-y-0' : 'translate-y-full'
      } transition-transform duration-300 ease-in-out transform`}>
        <div className="flex flex-col sm:flex-row justify-between items-center w-full px-4 sm:px-0">
          <EventButton className={`gap-x-4`} />
          <div className="h-full text-md text-[#015d9c]">
            <span className="font-bold mr-3">Call for a Free Estimate!</span>
            <Link className="text-[#015d9c] font-bold no-underline mr-2">
              (636) 600-4611
            </Link>
          </div>
        </div>
    </div>
  )
}
