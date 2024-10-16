import Image from 'next/image'
import React from 'react'
import blob from '../assets/blob.png'
import cloud from '../assets/cloud.svg'

const About = () => {
    return (
        <main>
            <div className='lg:flex  mt-[80px]  lg:mt-[190px] justify-center '>
                <div className=' flex lg:flex-col flex-col w-fit my-auto'>
                    <h1 className='lg:text-[120px] text-[64px] leading-[70px] lg:leading-[120px] -tracking-[2%] font lg:w-[456px] text-[#D9DAD9] text-center lg:mt-[45px] ' data-aos="fade-out" >About Us</h1>
                    <Image src={blob} alt='blob' className='mx-auto lg:ml-auto lg:-mr-[38px] lg:-mt-[80px] mt-[30px] close' data-aos="zoom-in" />
                    {/* <Image src={blob} alt='blob' className='mx-auto w-[650px] ' data-aos='fade-up' data-duration="1800"/> */}
                </div>
                <div className='border-[0.5px] border-[#22d70a] rounded-[24px] lg:rounded-[50px] p-[18px] lg:p-[40px] bg-[#080808] lg:w-[729px] lg:h-[558px] lg:ml-[80px] '>
                    <div className='text-[18px] lg:text-[23px] leading-[24px] lg:leading-[30px] -tracking-[2%] text-white '>
                        <h1 data-aos="fade-up" data-duration="1400">Fomotron Bot is a Solana chain WhatsApp Bot that lets you track and trade tokens. Fomotron is your WhatsApp sidekick. Ever wished you could trade Solana tokens without leaving WhatsApp? Wish granted!</h1><br />
                        <h1 data-aos="fade-up" data-duration="1500">Fomotron Bot is the very first WhatsApp bot designed exclusively for Solana traders.</h1><br />
                        <h1 data-aos="fade-up" data-duration="1600">Our mission is to make trading and on-chain analysis as easy as pie, especially for WhatsApp users. We’re here to sweep away the confusion that usually comes with trading and research bots.</h1><br />
                        <h1 data-aos="fade-up" data-duration="1700">With Fomotron, you can trade and track any token instantly after its launch — all from the cozy confines of your WhatsApp chat.</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default About
