"use client"
import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';
import { motion } from "framer-motion";
function Footer() {
  return (
    <section>
      <div className={styles.background}>
       <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale:1}} // Atur opacity akhir ke 1 dan pergerakan x
            transition={{ ease: "easeOut", duration: 2 }}
        >

              <div className='flex flex-col md:flex-row justify-center items-center md:gap-x-4 gap-y-8 md:gap-y-0' >

                <div className='md:w-[394px]' >
                  <div className='flex items-center gap-x-2 '>
                    <Image src={'/assets/images/logo.png'} width={44} height={52} />
                      <div className='' >
                        <h4 className='text-xl' >PT. Nelvan Infra Hutama</h4>
                        <p className='text-sm' >Memberikan Kepuasan Kepada Relasi</p>
                      </div>
                    </div>
                      <p className='text-xs mt-4 md:mt-8' >
                      Perusahaan kami PT.NELVAN INFRA HUTAMA yang 
                      telah berdiri sejak tahun 2003 merupakan dengan 
                      berbagai bidang kegiatan sebagai Kontraktor dan
                      Supplier yang berdomisili di Kabupaten Penajam 
                      Paser Utara Propinsi Kalimantan Timur.
                      </p>
                </div>
                <div className='h-[2px] md:h-[305px] md:w-1 w-full bg-white' />
                <div className='md:w-[394px]' >
                  <div className='flex items-center gap-x-2'>
                        <h4 className='text-2xl text-primary font-bold' >Address</h4>
                    </div>
                      <p className='text-sm font-bold ' >
                      Jl.PROPINSI KM.5,5 RT.03 KEL.NENANG KABUPATEN PENAJAM PASER UTARA
                      </p>
                      <p className='text-sm font-bold ' >
                      <span className='text-primary' >Tel</span> : 0542—7588 713 / 0822 55223090
                      </p>
                      <p className='text-sm font-bold ' >
                      <span className='text-primary' >Email</span> : nelvaninfrahutama@gmail.com
                      </p>
                </div>
              </div>
        </motion.div>
            </div>
        <div className='bg-white flex justify-center items-center py-5' >  
            <h6 className=' text-lg md:text-xl text-black' >Copyright © PT. Nelvan Infra Hutama</h6>
        </div>
    </section>
  )
}

export default Footer
