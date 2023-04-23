import { useState } from 'react'
import logo from "../assets/image.png";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";


const Header = () => {
    const [mobileIcon, setMobileIcon] = useState(false);
    const mobileHandler = () => {
        setMobileIcon((prev) => !prev);
    };


    return (
        <div className="flex justify-between px-[60px] py-5 items-center shadow-lg fixed w-full bg-white">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>


            <div onClick={mobileHandler} className="grid md:visible">
                {mobileIcon ? (
                    <GrClose className="text-[30px]" />
                ) : (
                    <HiOutlineMenuAlt3 className="text-[30px]" />
                )}
            </div>

            {mobileIcon && (
                <nav className="grid absolute bg-white left-0 top-[70px] w-full px-[60px] py-2">
                    <li className="text-[#40BFFF]">
                        <Link to="/">HOME</Link>
                    </li>
                    <li >
                        <Link to="/bags">BAGS</Link>
                    </li>
                    <li>
                        <Link to="/sneakers">SNEAKERS</Link>
                    </li>
                    <li>
                        <Link to="/belts">BELTS</Link>
                    </li>
                    <li>
                        <Link to="/auth/login">CONTACT</Link>
                    </li>
                </nav>
            )}

            <nav className="justify-center items-center md:flex">
                <ul className="flex gap-20 text-[#000000] cursor-pointer">
                    <li className="text-[#40BFFF]">
                        <Link to="/">HOME</Link>
                    </li>
                    <li >
                        <Link to="/bags">BAGS</Link>
                    </li>
                    <li>
                        <Link to="/sneakers">SNEAKERS</Link>
                    </li>
                    <li>
                        <Link to="/belts">BELTS</Link>
                    </li>
                    <li>
                        <Link to="/auth/login">CONTACT</Link>
                    </li>

                </ul>
            </nav>
        </div>

    );

};

export default Header