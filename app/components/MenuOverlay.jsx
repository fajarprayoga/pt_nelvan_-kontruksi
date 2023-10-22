import Image from 'next/image'
import NavLink from './NavLink'
import Link from 'next/link'

const MenuOverlay = ({ links, scrolled,navbarOpen }) => {
    return (
        <ul className={`flex flex-col py-4 items-center  ${scrolled ||navbarOpen ? ' bg-opacity-80 transition duration-300 ease-in-out' : 'bg-transparent  bg-opacity-100 transition duration-300 ease-in-out'}`} >
            {links.map((link, index) => {

                if((links.length - 1) == index){
                    return (
                        <div key={index} className="group relative hover:cursor-pointer border-2  py-3 px-14 rounded-full hover:bg-primary mt-4">
                            <Link href={link.path} className='  block text-white font-bold text-xl rounded md:p-0 '>
                                {link.title}
                            </Link>
                        </div>
                    )
                }else{
                    return (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title} />
                    </li>

                    )
                }
            }
            )}
        </ul>
    )
}

export default MenuOverlay