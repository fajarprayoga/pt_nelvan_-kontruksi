"use client";
import React from 'react'
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import styles from './hero.module.css';
import Link from 'next/link';
function HeroSection() {

   
    return (
        <section id='home' >
            <div className={styles.herobackground}>
                <div className='grid grid-cols-1 sm:grid-cols-12' >
                    <div className='col-span-7 place-self-center text-center sm:text-left' >
                        <p className='text-sm md:text-2xl italic text-primary mb-4' >“ Memberikan Kepuasan Kepada Relasi “</p>
                        <h1 className='text-white mb-4 text-lg md:text-5xl font-extrabold'  >
                            
                         {/* <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'CONSTRUCTION INDUSTRY', 1000, 
                                ]}
                                wrapper="span"
                                speed={70}
                                style={{height:300}}
                                repeat={Infinity}/> */}
                        </h1>
                        <p className='text-white text-sm md:text-2xl ' >
                         
                            {/* <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Kami telah berdiri sejak tahun 2003 merupakan dengan berbagai bidang kegiatan sebagai Kontraktor dan Supplier yang berdomisili di Kabupaten Penajam Paser Utara Propinsi Kalimantan Timur', 2000, 
                                ]}
                                wrapper="span"
                                speed={70}
                                // style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}/> */}
                        </p>

                        <div className='mt-8 md:mt-16 flex flex-row space-x-4 justify-center md:justify-start' >
                            <Link href={'https://wa.link/lkxkyy'} className='flex border-2 text-xl md:text-2xl items-center bg-transparent text-white py-2 px-8 rounded-full md:py-4 hover:bg-primary md:px-20' >Contact Us </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection