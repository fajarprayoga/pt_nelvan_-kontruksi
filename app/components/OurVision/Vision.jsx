import React from 'react'
import styles from './ourvision.module.css';
function OurVision() {
  return (
    <section className='' id='service' >
        <div className={styles.background} >
          <div className='flex justify-between gap-x-4 items-center w-full py-4 md:py-14 px-8 md:px-28' >
            <h3 className='text-primary text-2xl font-bold' >Our <br /> Visison</h3>
            <div className='max-w-[555px] flex justify-end' >
              
              <p className='text-xs md:text-2xl italic text-right  ' >
              “Menjadi perusahaan swasta nasional <br />
                terdepan di industri jasa konstruksi dan Supplier”
              </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default OurVision
