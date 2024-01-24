import React from 'react'
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
                    <h2 className=''>Check out your favorite album whenever!</h2>
                    <p>"Let's get lost in the music and forget about the
                      world for a while</p>
                      <div>
                        <button>Get Started</button>
                        <button>Discover!</button>
                        </div>
                </div>
               

            </div>
        </div>
        </div>
  )
}

export default Home