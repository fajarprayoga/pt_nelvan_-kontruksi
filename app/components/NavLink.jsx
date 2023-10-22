import Link from "next/link";

const NavLink = ({ href, title, button=false }) => {

    if(button){
        return (

            <div className="group relative hover:cursor-pointer border-2  py-3 px-14 rounded-full hover:bg-primary">
                <Link href={href} className='  block text-white font-bold text-xl rounded md:p-0 '>
                    {title}
                </Link>
            </div>
        )
    }else{
        return (
            <div className="group relative hover:cursor-pointer">
                <Link href={href} className='block py-2 pl-3 pr-4 text-white font-bold text-xl rounded md:p-0 group-hover:text-primary'>
                    {title}
                </Link>
                <div className="inset-0 bg-transparent cursor-pointer group-hover:bg-primary h-[4px]" ></div>
            </div>
        )
    }

   
}

export default NavLink;