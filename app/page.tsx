import React from 'react'
import Homepage from './component/Homepage'
import About from './component/About'
import Utilities from './component/FAQ'

const Home = () => {
  return (
    <main className='w-full  mx-auto overflow-hidden  '>
        <section className='image w-full lg:mt-[0px] lg:h-auto'>
          <div className='content'>
            <section className='lg:max-w-[1440px] w-[95%] mx-auto lg:w-full'>
           <Homepage />
           <About />
           <Utilities />
            </section>
          </div>

        </section>
    </main>
  )
}

export default Home
