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
    <div className={`h-[100px] w-full bg-[#015d9c] flex  items-center fixed bottom-0 left-0 z-10 py-2 px-10 ${
        modalVisible ? 'translate-y-0' : 'translate-y-full'
      } transition-transform duration-300 ease-in-out transform`}>
        <div className="flex justify-between items-center w-full">
          <EventButton className={`gap-x-4`} />
          <div className="h-full text-md">
            <span className="font-bold mr-3 text-white">Call for a Free Estimate!</span>
            <Link className="text-white font-bold no-underline mr-2">
              (636) 600-4611
            </Link>
          </div>
        </div>
    </div>
  )
}
