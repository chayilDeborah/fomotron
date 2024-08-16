import Image from 'next/image'
import React from 'react'
import gojo from '../assets/gojo.png'
import twitter from '../assets/twitter.svg'
import telegram from '../assets/telegram.svg'
import whatsapp from '../assets/whatsapp.svg'
import Link from 'next/link'

const Community = () => {
  return (
    <main>
       <div className='lg:max-w-[1440px] w-[93%] mx-auto flex justify-center lg:w-full '>
            <div>
                <Image src={gojo} alt='gojo' className='mt-[50px] lg:-mt-[30px] mx-auto '  data-aos="fade-up" data-duration="1400"/>
                <h1  className='lg:text-[150px] text-[80px] leading-[90px]  -tracking-[2%] font text-[#D9DAD9] text-center lg:mt-[220px] mt-[80px] lg:mb-[110px] mb-[58px] ' data-aos="fade-up" data-duration="1600">Community</h1>
                <div className='lg:flex w-fit mx-auto mb-[80px] lg:mb-[145px]'>
                    <Link href='https://x.com/thegojobot_sol'>
                    <button className='border-[1px] border-[#22d70a] flex w-[235px] h-[68px] rounded-[12px]  px-[15.5px] '  data-aos="fade-up" data-duration="1800">
                        <Image src={twitter} alt='twitter' className='my-auto w-[42px] ' />
                        <h1 className='text-[31px] leading-[37.2px] -tracking-[2%] text-white ml-[20px] my-auto   hover:text-[#FF7878]'>X/Twitter</h1>
                    </button>
                    </Link>
                    <Link href='https://t.me/gojobotportal'>
                    <button className='border-[1px] border-[#22d70a] flex w-[235px] h-[68px] rounded-[12px]  px-[15.5px] lg:ml-[60px] lg:mt-[0px] mt-[30px] '  data-aos="fade-up" data-duration="2000">
                        <div className='bg-[#22d70a] my-auto rounded-full w-[48px] h-[42px]  flex justify-center items-center'>
                        <Image src={telegram} alt='telegram' className='my-auto mx-auto w-[30px] ' />
                        </div>
                        <h1 className='text-[31px] leading-[37.2px] -tracking-[2%] text-white ml-[20px] my-auto  hover:text-[#FF7878] '>Telegram</h1>
                    </button>
                    </Link>
                    <Link href=' https://wa.me/+212694033851'>
                    <button className='border-[1px] border-[#22d70a] flex w-[235px] h-[68px] rounded-[12px]  px-[15.5px] lg:ml-[60px] lg:mt-[0px] mt-[30px] '  data-aos="fade-up" data-duration="2200">
                        <div className='bg-[#22d70a] my-auto rounded-full w-[48px] h-[42px]  flex justify-center items-center'>
                        <Image src={whatsapp} alt='whatsapp' className='my-auto mx-auto w-[30px]' />
                        </div>
                        <h1 className='text-[31px] leading-[37.2px] -tracking-[2%] text-white ml-[10px] my-auto  hover:text-[#FF7878]  '>WhatsApp</h1>
                    </button>
                    </Link>


                </div>
            </div>
        </div>
    </main>
  )
}

export default Community
