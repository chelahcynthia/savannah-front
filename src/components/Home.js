import React from 'react'
import Albums from './Albums';
import rectangle from '../assets/Rectangle 8.png';

const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mxx-auto mt-20'>
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-5'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10 '>
               {/* banner image */}
               <div>
                  <img src={rectangle} alt='' className='lg:h-{346px}'/>
                </div>
                {/* banner */}
                <div className='md:w-/5'>
                    <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>Check Out Your Favorite Album Whenever!</h2>
                    <p className='text-[#EBEBEB] text-2xl mb-8'>"Let's get lost in the music and forget about the
                      world for a while</p>
                      <div className='space-x-5 space-y-4'>
                        <button className='btnPrimary'>Get Started</button>
                        <button className='btnPrimary'>Discover!</button>
                        </div>
                </div>
               
            </div>
        </div>
                <Albums />
        </div>
  )
}


export default Home