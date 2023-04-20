import { useState } from 'react'
import logo from "../assets/image.png";
import { Link } from "react-router-dom";




function Header() {

    return (
        <header className="flex justify-between items-center bg-[#FFFFFF] pr-[80px] pl-[80px] pt-[20px] pb-[20px] w-full">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <nav className="md:flex md:visible invisible gap-20">
                <ul className="flex gap-20 text-[#000000] cursor-pointer">
                    <li className="text-[#40BFFF]">
                        <Link to="/">HOME</Link>
                    </li>
                    <li >
                        <Link to="/artistes">BAGS</Link>
                    </li>
                    <li>
                        <Link to="/music">SNEAKERS</Link>
                    </li>
                    <li>
                        <Link to="/videos">BELT</Link>
                    </li>
                    <li>
                        <Link to="/videos">CONTACT</Link>
                    </li>

                </ul>
            </nav>
        </header>

    )
}

export default Header