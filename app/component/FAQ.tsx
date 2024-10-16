import Image from 'next/image'
import React from 'react'
import whatsap from '../assets/whatsap.png'

const Utilities = () => {
    return (
        <main className='w-full relative mx-auto '>
            <div className='lg:max-w-[1440px] w-[93%] mx-auto flex justify-center lg:w-full '>
                        <div className='lg:mt-[140px] mt-[100px]  '>
                            <h1 className='lg:text-[200px] text-[65px] leading-[90px] lg:leading-[180px] -tracking-[2%] font text-[#D9DAD9] text-center ' data-aos="fade-down">FAQs</h1>
                            <div className='mt-[37px] grid grid-cols-1 lg:grid-cols-3 gap-[30px] lg:gap-[62px] mb-[50px] '>
                                <div className='lg:w-[369px] lg:h-[378px] w-[330px] border-[1px] border-[#22d70a] rounded-[17px] round '  data-aos="fade-up" data-duration="1400" >
                                    <div className='bg-[#0A0A0A] rounded-t-[17px]  '>
                                        <Image src={whatsap} alt='whatsapp' className='w-[72px] mx-auto py-[38px] ' />
                                    </div>
                                    <div className='lg:h-[234px] bg-[#080808] pt-[21px] pl-[28px]  lg:border-b-[1.7px] lg:border-b-[#22d70a] rounded-b-[17px] '>
                                        <h1 className='text-[20px] leading-[24px] -tracking-[2%] text-[#E6E7E6] font-bold '>Why Solana?                                        </h1>
                                        <div className='text-[16px] leading-[19.2px] -tracking-[2%] text-[#E6E7E6] mt-[32px] pb-[42px] mr-[10px] '>
                                            <h1>Why not? WhatsApp boasts over two billion users worldwide, making it the most popular global mobile messenger app. </h1>
                                            <br />
                                            <h1>We understand that many degens and devs might prefer WhatsApp, so we made it happen.</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className='lg:w-[369px] lg:h-[378px] w-[330px] border-[1px] border-[#22d70a] rounded-[17px] lg:border-b-[1px] round '  data-aos="fade-up" data-duration="1500">
                                    <div className='bg-[#0A0A0A] rounded-t-[17px]  '>
                                        <Image src={whatsap} alt='whatsapp' className='w-[72px] mx-auto py-[38px] ' />
                                    </div>
                                    <div className='lg:h-[234px] bg-[#080808] pt-[21px] pl-[28px]  lg:border-b-[1.7px] lg:border-b-[#22d70a] rounded-b-[17px] lg:border-b-[1.7px] lg:border-b-[#22d70a] '>
                                        <h1 className='text-[20px] leading-[24px] -tracking-[2%] text-[#E6E7E6] font-bold '>Is Fomotron Free?</h1>
                                        <h2 className='text-[16px] leading-[19.2px] -tracking-[2%] text-[#E6E7E6] mt-[32px] pb-[42px] mr-[10px] '>We love pumpers, devs, and chads.</h2>
                                    </div>
                                </div>
                                <div className='lg:w-[369px] lg:h-[378px] w-[330px] border-[1px] border-[#22d70a] rounded-[17px] round '  data-aos="fade-up" data-duration="1600">
                                    <div className='bg-[#0A0A0A] rounded-t-[17px]  '>
                                        <Image src={whatsap} alt='whatsapp' className='w-[72px] mx-auto py-[38px] ' />
                                    </div>
                                    <div className='lg:h-[234px] bg-[#080808] pt-[21px] pl-[28px]  lg:border-b-[1.7px] lg:border-b-[#22d70a] rounded-b-[17px] '>
                                        <h1 className='text-[20px] leading-[24px] -tracking-[2%] text-[#E6E7E6] font-bold '>Is Fomotron Safe?</h1>
                                        <h2 className='text-[16px] leading-[19.2px] -tracking-[2%] text-[#E6E7E6] mt-[32px] pb-[42px] mr-[10px] '>Yes, Fomotron has multiple security layers in addition to WhatsApp&#39;s security measures. However, we strongly advise you to secure your private keys.
                                            We don’t keep or save your keys and can’t help you recover them.</h2>
                                    </div>
                                </div>
                                <div className='lg:w-[369px] lg:h-[378px] w-[330px] border-[1px] border-[#22d70a] rounded-[17px] round '  data-aos="fade-up" data-duration="1700">
                                    <div className='bg-[#0A0A0A] rounded-t-[17px]  '>
                                        <Image src={whatsap} alt='whatsapp' className='w-[72px] mx-auto py-[38px] ' />
                                    </div>
                                    <div className='lg:h-[234px] bg-[#080808] pt-[21px] pl-[28px]  lg:border-b-[1.7px] lg:border-b-[#22d70a] rounded-b-[17px] '>
                                        <h1 className='text-[20px] leading-[24px] -tracking-[2%] text-[#E6E7E6] font-bold '>How to Use Fomotron Bot?</h1>
                                        <h2 className='text-[16px] leading-[19.2px] -tracking-[2%] text-[#E6E7E6] mt-[32px] pb-[42px] mr-[10px] '>Visit our bot and use the /help command or read our whitepaper.</h2>
                                    </div>
                                </div>
                                <div className='lg:w-[369px] lg:h-[378px] w-[330px] border-[1px] border-[#22d70a] rounded-[17px] round '  data-aos="fade-up" data-duration="1800">
                                    <div className='bg-[#0A0A0A] rounded-t-[17px]  '>
                                        <Image src={whatsap} alt='whatsapp' className='w-[72px] mx-auto py-[38px] ' />
                                    </div>
                                    <div className='lg:h-[234px] bg-[#080808] pt-[21px] pl-[28px]  lg:border-b-[1.7px] lg:border-b-[#22d70a] rounded-b-[17px] '>
                                        <h1 className='text-[20px] leading-[24px] -tracking-[2%] text-[#E6E7E6] font-bold '>When Will $Fomotron Launch?</h1>
                                        <div className='text-[16px] leading-[19.2px] -tracking-[2%] text-[#E6E7E6] mt-[32px] pb-[42px] mr-[10px] '><h2>This information will be available on our social media platforms, and we are launching on PumpFun. </h2>
                                            <br />  <h2>More details coming soon.</h2></div>
                                    </div>
                                </div>
                                <div className='lg:w-[369px] lg:h-[378px] w-[330px] border-[1px] border-[#22d70a] rounded-[17px] round '  data-aos="fade-up" data-duration="1900">
                                    <div className='bg-[#0A0A0A] rounded-t-[17px]  '>
                                        <Image src={whatsap} alt='whatsapp' className='w-[72px] mx-auto py-[38px] ' />
                                    </div>
                                    <div className='lg:h-[234px] bg-[#080808] pt-[21px] pl-[28px]  lg:border-b-[1.7px] lg:border-b-[#22d70a] rounded-b-[17px] '>
                                        <h1 className='text-[20px] leading-[24px] -tracking-[2%] text-[#E6E7E6] font-bold '>Collaboration and Partnerships?</h1>
                                        <h2 className='text-[16px] leading-[19.2px] -tracking-[2%] text-[#E6E7E6] mt-[32px] pb-[42px] mr-[10px] '>Collaboration and partnership requests can be made via Twitter DM or by joining our support group on Telegram.</h2>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
        </main>
    )
}

export default Utilities
