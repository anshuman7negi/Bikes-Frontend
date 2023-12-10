import { useState } from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {

    const [navbarOpen, setNavbar] = useState(false);

    const toogleNavbar = () => {
        setNavbar(!navbarOpen);
    }

    return (
        <>
            <nav className={`${navbarOpen ? 'flex' : 'hidden'}  md:flex flex-col items-center bg-gray-900 text-white min-h-screen w-full md:w-2/4 lg:w-1/4 gap-32 md:gap-40 pt-16`}>
                <h1 className="text-2xl font-bold">Royal Feel</h1>
                <ul className="list-none flex flex-col text-xl w-full font-bold">
                    <li className="hover:bg-orange-500 w-full text-center py-2">
                      Bikes
                    </li>
                    <li className="hover:bg-orange-500 w-full text-center py-2">Reserve</li>
                    <li className="hover:bg-orange-500 w-full text-center py-2">My Reservation</li>
                    <li className="hover:bg-orange-500 w-full text-center py-2">                        
                        add
                    </li>
                    <li className="hover:bg-orange-500 w-full text-center py-2">Delete</li>
                </ul>
            </nav>


            {navbarOpen ? (
                <div className="absolute md:hidden flex flex-col top-8 left-5 z-20" onClick={toogleNavbar}>
                    <hr className='bg-white w-10 h-[4px] rounded-lg rotate-[-41deg]' />
                    <hr className='bg-white w-10 h-[4px] rounded-lg rotate-[41deg] ' />
                </div>
            ) : (
                <div className="absolute md:hidden flex flex-col gap-1 top-5 left-5 z-20" onClick={toogleNavbar}>
                    <hr className='bg-black w-10 h-[5px] rounded-lg' />
                    <hr className='bg-black w-10 h-[5px] rounded-lg' />
                    <hr className='bg-black w-10 h-[5px] rounded-lg' />
                </div>
            )}
        </>
    )
}

export default Navbar;