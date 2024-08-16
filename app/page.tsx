import React from 'react'
import Homepage from './component/Homepage'

const Home = () => {
  return (
    <main className='w-full  mx-auto overflow-hidden  '>
        <section className='image w-full lg:mt-[0px] lg:h-[1000px]'>
          <div className='content'>
            <section className='lg:max-w-[1440px] w-[95%] mx-auto lg:w-full'>
           <Homepage />
            </section>
          </div>

        </section>
    </main>
  )
}

export default Home
