import React, { useState } from 'react';
import Link from '../Link/Link';
import { LuMenu } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";

const Navbar = () => {
    const [open,setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "*", name: "Not Found" },
      ];
    return (
        <nav>
            <div onClick={()=>setOpen(!open)} className='md:hidden text-xl bg-yellow-300 p-6'>
                {open ? <MdOutlineCancel /> :  <LuMenu />}
            </div>
            <ul className= {`md:flex absolute ${open ? 'top-16' : '-top-60'} duration-1000 md:static bg-yellow-300 p-6`}>
                
                {routes.map(route => <Link key = {route.id} route = {route}></Link>)}
            </ul>
        </nav>
    );
};

export default Navbar;