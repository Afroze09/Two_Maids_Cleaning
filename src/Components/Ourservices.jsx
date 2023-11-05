import React, { useState, useEffect } from 'react';
import { services } from '../services';
import { Link } from 'react-router-dom';
export default function Ourservices() {
  const rotatingWords = ["better", "brighter", "sunnier", "more delightful", "more fulfilling"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000); // Change the word every 2 seconds (you can adjust this interval)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='py-12 px-[250px]'>
      <div className=' mb-5'>
      <h1 className='text-7xl font-semibold font-[TiemposFine] mb-5 text-[#cf2680] '>Your day just got a <br /> whole lot <span className=''>{rotatingWords[currentWordIndex]}</span>.</h1>
      <p className='text-[27px] tracking-[0.07em] text-[#7b6c73] leading-9'>
      Let Two Maids do all of the dirty work for you. Focus on <br /> everything else you need to get done and schedule a <br /> cleaning with us today.
      </p>
      </div>
      <div>
        <h4 className='text-[#cf2680] font-bold mb-3  text-3xl'>Your Resident Home Cleaning Expert</h4>
        <p className='text-[16px] text-[#5f6060] font-medium leading-7 mb-5'>At Two Maids, our purpose is to make a difference in people’s daily lives. We help busy families maintain beautiful, clean and healthy homes and take care of the chores that no one has the time or energy to do. We proudly serve our customers, putting their needs ahead of our own, so they can focus on what matters most to them. Everything we do makes lives a little easier and homes a little brighter.</p>
        <div className='grid grid-cols-3 gap-7 h-[260px] w-full mb-4'>
            {
                services.map(v =>{
                    return(
                        <div key={v.id} className='flex h-64 w-[240px] flex-col items-center'>
                            <img src={v.icon} alt="service" className='h-16 mb-3 ' />
                            <h4 className='text-center text-lg text-[#cf2680] font-bold '>{v.title}</h4>
                            <p className='text-center text-sm text-[#5f6060] font-medium leading-6'>{v.desc}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className='grid grid-cols-1 text-center mb-5' >
        <Link className='no-underline'><button className=' pink-btn font-extrabold  p-2 w-64' >VIEW OUR SERVICES</button></Link>
        </div>
      </div>
    </div>
  );
}
