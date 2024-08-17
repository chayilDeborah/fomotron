import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import blobb from '../assets/blobb.png'
import navlogo from '../assets/navlogo.png'

const Homepage = () => {
    return (
        <main>
            <Image src={navlogo} alt='logo' className='lg:w-[250px] w-[200px] mt-[40px] lg:ml-[60px] ' data-aos='fade-up' data-duration="1400" /> 
            <div className='mx-auto text-white pt-[27px] '>
                <div className='mx-auto flex justify-center close'>
                    <div className='mx-auto flex justify-center mt-[50px] lg:w-[289px] homebtn lg:mx-[0px] mx-auto w-[240px] h-[39px] rounded-[12px] text-[#FFFFFF] p-[0.7px]' data-aos="fade-up" data-duration="1500">
                        <div className='flex justify-center items-center rounded-[12px] bg-[#000401] flex h-full w-full items-center justify-center'>
                            <h1 className='lg:text-[16px] text-[13px] leading-[19.2px] -tracking-[2%] hometext mx-[10px] '>Trading web3 tokens on WhatsApp</h1>
                        </div>
                    </div>
                </div>
                <div className='mt-[29px] close relative z-20 flex-col items-center justify-center'>
                    <h1 className='lg:text-[93.7px] text-[37.7px] leading-[63.8px] lg:leading-[88.8px] -tracking-[2%] font lg:w-full text-center ' data-aos="zoom-out" data-duration="1600">Trade | Scan | Degen</h1>
                    <div className='mx-auto flex justify-center mt-[50px] '>
                        <Link href='https://wa.me/+212694033851'>
                            <button className='mx-auto flex justify-center   w-[183px] homebtn lg:mx-[0px] mx-auto h-[38px] rounded-[18px] text-[#FFFFFF] p-[1px]'>
                                <div className='flex justify-center items-center rounded-[18px] bg-[#000401]   flex h-full w-full items-center justify-center'>
                                    <h1 className='text-[13px] lg:text-[16px] leading-[19.2px] -tracking-[2%] hover:text-[#22D70A] text-[#E6F6E8] font-semibold' data-aos-offset="10" data-aos="fade-up" data-duration="1700">TRADE NOW</h1>
                                </div>
                            </button>
                        </Link>
                        {/* </div> */}
                    </div>
                    <Image src={blobb} alt='blob' className='mx-auto w-[650px] lg:mt-[45px] ' data-aos='fade-up' data-duration="1800"/>
                </div>
            </div>
        </main>
    )
}

export default Homepage
