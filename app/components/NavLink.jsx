import Link from "next/link";

const NavLink = ({ href, title, button = false, setActiveNavbar, activeNavbar }) => {

    if (button) {
        return (

            <div className={`group relative hover:cursor-pointer border-2  py-3 px-14 rounded-full hover:bg-primary ${activeNavbar == href ? 'bg-primary' : 'bg-transparent'}`}>
                <Link onClick={() => setActiveNavbar(href)} href={href} className='  block text-white font-bold text-xl rounded md:p-0 '>
                    {title}
                </Link>
            </div>
        )
    } else {
        return (
            <div className="group relative hover:cursor-pointer">
                <Link onClick={() => setActiveNavbar(href)} href={href} className={`block py-2 pl-3 pr-4  font-bold text-xl rounded md:p-0 group-hover:text-primary  ${activeNavbar == href ? 'text-primary' : 'text-white'}`}>
                    {title}
                </Link>
                <div className={`inset-0 cursor-pointer group-hover:bg-primary h-[4px] ${activeNavbar == href ? 'bg-primary' : 'bg-transparent'}`} ></div>
            </div>
        )
    }


}

export default NavLink;