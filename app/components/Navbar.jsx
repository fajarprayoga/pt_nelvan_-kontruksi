"use client";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import MenuOverlay from './MenuOverlay';
import NavLink from './NavLink';
import Image from 'next/image';
const navLinks = [
    {
        title: "Home",
        path: '#home'
    },
    {
        title: "About Us",
        path: '#about'
    },
    {
        title: "Service",
        path: '#service'
    },
    {
        title: "Project",
        path: '#project'
    },
    {
        title: "Explore",
        path: '#explore'
    },
];

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    const [menuLanguage,setMenuLanguage] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setNavbarOpen(window.innerWidth < 1024 && navbarOpen == true);
            setMenuLanguage(window.innerWidth < 1024 && navbarOpen == true);
        };
        handleResize();
        window.addEventListener("resize", handleResize);


        // scroll
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    // scroll
const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 ${scrolled ||navbarOpen ? 'bg-black bg-opacity-80 transition duration-300 ease-in-out' : ''}  py-6 `} >
            <div className='flex flex-wrap items-center justify-between px-8 md:px-12 py-4' >
                <Link href='/' className='text-lg md:text-xl  font-semibold flex gap-x-2 text-white items-center' >
                    <Image src={'/assets/images/logo.png'} width={45} height={52} className='w-[25px] h-[32px] md:w-[45px] md:h-[52px]'  />
                    <div>
                        <h2 className=' text-base md:text-xl' >PT. Nelvan Infra Hutama</h2>
                        <p className='text-xs' >Memberikan Kepuasan Kepada Relasi</p>
                    </div>
                </Link>
                <div className='mobile-menu block lg:hidden' >
                    {!navbarOpen ?
                        (<button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white' >
                            <Bars3Icon className='h-5 w-5' />
                        </button>)
                        :
                        (<button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5' />
                        </button>)
                    }
                </div>
                
                <div className='hidden lg:block'>
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-16 mt-0 items-center font-Inter' >
                        {navLinks.map((link, index) => (
                            <li key={index} >
                                <NavLink href={link.path} title={link.title} button={(navLinks.length-1) == index} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay scrolled={scrolled} navbarOpen={navbarOpen} links={navLinks} menuLanguage={menuLanguage} setMenuLanguage={setMenuLanguage} /> : null}
        </nav>
    )
}

export default Navbar