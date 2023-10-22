import AboutSection from './components/AboutSection'
import Footer from './components/Footer/Footer'
import HeroSection from './components/Hero/HeroSection'
import Navbar from './components/Navbar'
import OurVision from './components/OurVision/Vision'
import WhatWeOffer from './components/WhatWeOffer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-second ">
      <Navbar />
      <div className="">
        <HeroSection />
        <AboutSection />
        <OurVision/>
        <WhatWeOffer/>
        <Footer/>
      </div>

    </main>
  )
}
