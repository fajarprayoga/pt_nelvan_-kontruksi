'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css';
import { motion } from "framer-motion";
const dataSwipper = [
    {
        title: 'Constraction Building',
        desc : 'We provide trusted building construction and involve companies to work with us in the construction process with sophisticated  and innovative equipment',
        image : '/assets/images/whatweoffer/1.png'
    },
    {
        title: 'Field workers',
        desc : 'We provide trusted building construction and involve companies to work with us in the construction process with sophisticated  and innovative equipment',
        image : '/assets/images/whatweoffer/2.png'
    },
    {
        title: 'Conceptual design',
        desc : 'We provide trusted building construction and involve companies to work with us in the construction process with sophisticated  and innovative equipment',
        image : '/assets/images/whatweoffer/3.png'
    },
    {
        title: 'Constraction Building',
        desc : 'We provide trusted building construction and involve companies to work with us in the construction process with sophisticated  and innovative equipment',
        image : '/assets/images/whatweoffer/1.png'
    },
    {
        title: 'Field workers',
        desc : 'We provide trusted building construction and involve companies to work with us in the construction process with sophisticated  and innovative equipment',
        image : '/assets/images/whatweoffer/2.png'
    },
    {
        title: 'Conceptual design',
        desc : 'We provide trusted building construction and involve companies to work with us in the construction process with sophisticated  and innovative equipment',
        image : '/assets/images/whatweoffer/3.png'
    },
]


const ModuleSwipper = ({active, index, item}) => {
    const {title,desc,image} = item;
    return (
        <div className={`max-w-[355px] pb-4  relative md:h-[564px] min-h-[400px]`} >
            <div className={`${active ==index ? 'absolute -top-12' : ''} mt-28`} >
                <Image className='' src={image} width={355} height={422} />
                <h4 className='text-primary text-xl font-bold mt-5' >{title} </h4>
                <p className='text-base mt-3' >
                    {desc}
                </p>
                <div className='mt-4' >
                    <Link href={''} className={`border-2 rounded-full w-[104px] h-[29px] px-5 py-2 ${active ==index ? 'hover:bg-primary bg-transparent' :'hover:bg-transparent bg-primary'}`}>Read More</Link>
                </div>
            </div>
        </div>
    )
}

function WhatWeOffer() {

    const [itemView, setItemView] = useState(3)
    const [active, setActive] = useState(0)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemView(1);
            } else {
                setItemView(3);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        setLoading(false)
        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
    <section className='py-8 md:py-14 px-8 md:px-28 bg-[#000000]' >
        <div className='flex justify-center flex-col items-center gap-y-1' >
            <h3 className='text-2xl text-center  md:text-3xl font-bold  ' >What We Offer</h3>
            <div className="inset-0 cursor-pointer bg-primary h-[4px] w-28" ></div>
        </div>

        {loading ==false && (
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale:1}} // Atur opacity akhir ke 1 dan pergerakan x
            transition={{ ease: "easeOut", duration: 2 }}
        >
             <div className='flex justify-center' >
                <Swiper
                    slidesPerView={itemView}
                    // grabCursor={true}
                    spaceBetween={30}
                    className='mySwiper'
                    centeredSlides={true}
                    onSlideChange={(swiper) => {
                        setActive(swiper.realIndex)
                    }}
                    loop={true}
                >

                    {dataSwipper.map((item, index) => (
                        <SwiperSlide key={index}  >
                            <ModuleSwipper active={active} item={item} index={index} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.div>
           
        )}
    </section>
  )
}

export default WhatWeOffer
