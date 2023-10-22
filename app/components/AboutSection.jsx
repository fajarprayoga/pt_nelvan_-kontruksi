"use client";
import Image from 'next/image'
import React, { useState, useTransition } from 'react'
import TabButton from './TabButton';
import Link from 'next/link';

function AboutSection() {

    return (
        <section className='text-black   ' >
            <div className='relative py-14 md:py-52 px-8 md:px-28  bg-white' >
                <div className=' absolute px-4 md:px-20 md:-top-20 -top-10 inset-x-0' >
                    <div className='h-[100px] md:h-[147px] pl-8 text-center md:text-start md:pl-2 pr-8 shadow-lg bg-white rounded-xl grid grid-cols-1 md:grid-cols-2' >
                        <div className='flex items-center gap-x-4' >  
                            <div className=' hidden md:inline-block w-[155px] h-[3px] bg-black' />
                            <p className='w-full md:max-w-[174px] text-base md:text-lg font-bold' >
                                We already have 
                                collaborations with 
                                several companies
                            </p>
                        </div>
                        <div className='flex gap-x-4 items-center justify-center md:justify-end' >
                            {[1,2,3,4,5,6].map((res,index) => (
                                <div key={index} >
                                    <Image src={`/assets/images/clients/${res}.png`} width={80} height={80} className='md:w-full w-[30px]' />
                                </div>
                            ))}
                        </div>
                    </div>  
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-x-0  items-center mt-12 md:mt-0' >
                    <div className='flex justify-center' >
                        <Image src={'/assets/images/about-image.png'} className='md:w-[449px] md:h-[542px] w-auto' width={449} height={542} />
                    </div>
                    <div className='' >
                        <h3 className='text-2xl text-primary font-bold' >
                        Who we are
                        </h3>
                        <p className=' text-xl md:text-3xl font-bold mt-5 ' >
                            World’s largest and trust
                            Constraction Company
                        </p>
                        <p className='text-second text-lg md:text-2xl mt-5' >
                            berkembang secara berkesinambungan, memberikan 
                            kesejahteraan kepada karyawan, pengurus dan stake 
                            holder lainnya melalui komitmen terhadap CSR 
                            (corporate social responsibility) dan tata kelola
                            perusahaan yang baik (good corporate governance)
                        </p>
                        <div className='w-full flex items-center justify-center md:justify-start' >
                            <div className="  mt-8 group relative hover:cursor-pointer border-2 py-3 md:py-5 px-16 rounded-full bg-primary  " style={{width:'fit-content'}} >
                                <Link href={'#'} className=' text-white font-bold text-xl md:text-2xl rounded md:p-0 '>
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection