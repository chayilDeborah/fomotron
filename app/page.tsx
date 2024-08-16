"use client"
import React, {useEffect} from "react"
import Homepage from './component/Homepage'
import About from './component/About'
import Utilities from './component/FAQ'
import Community from './component/Community'
import Aos from "aos"
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    Aos.init({
       offset: 0,
       duration: 1200,
       easing: "ease",
       delay: 0,
    })
  }, [])
  return (
    <main className='w-full  mx-auto overflow-hidden  '>
        <section className='image w-full lg:mt-[0px] lg:h-auto'>
          <div className='content'>
            <section className='lg:max-w-[1440px] w-[93%] mx-auto lg:w-full'>
           <Homepage />
           <About />
           <Utilities />
           <Community />
            </section>
          </div>

        </section>
    </main>
  )
}

export default Home
