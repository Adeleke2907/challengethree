import { useState } from 'react'
import logo from "../assets/image.png";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import Arrowdown from "../assets/arrowdown.png";
import Profile from "../assets/profile.png";
import Cart from "../assets/Cart.png";
import Search from "../assets/search.png";

const Header = () => {
    const [mobileIcon, setMobileIcon] = useState(false);
    const mobileHandler = () => {
        setMobileIcon((prev) => !prev);
    };


    return (
        <div className='relative pb-[130px]'>


            <div className=' fixed w-full bg-white z-10'>
                <nav className='flex justify-between px-[60px] py-3 border border-b-[#FAFAFB]'>
                    <ul className='flex justify-between gap-3'>
                        <li>
                            <div className='flex items-center '>
                                EN <IoMdArrowDropdown />
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center '>
                                USD <IoMdArrowDropdown />
                            </div>
                        </li>
                    </ul>

                    <ul className='flex items-center gap-5'>
                        <li>
                            <div className='flex items-center '>
                                <AiOutlineUser /> My Profile
                            </div>
                        </li>
                        <li>
                            <Link to="/Cart">
                                <div className='flex relative'>
                                    <AiOutlineShoppingCart />
                                    <span className='w-[15px] h-[15px] bg-[#f12d2d] text-[#fff] rounded-full flex items-center p-1 text-[10px] absolute top-[-10px] right-[-10px]'>
                                        2
                                    </span>
                                </div>
                            </Link>

                        </li>
                        <li>
                            Items $0.00
                        </li>
                        <li>
                            <AiOutlineSearch />
                        </li>


                    </ul>
                </nav>
                <div className="flex justify-between px-[60px] py-5 items-center">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>

                    <div onClick={mobileHandler} className="visible md:hidden">
                        {mobileIcon ? (
                            <GrClose className="text-[30px]" />
                        ) : (
                            <HiOutlineMenuAlt3 className="text-[30px]" />
                        )}
                    </div>

                    {mobileIcon && (
                        <nav className="grid absolute bg-white left-0 top-[135px] w-full px-[60px] py-2">
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
                                <Link to="/Producttools">PRODUCTS</Link>
                            </li>
                            <li>
                                <Link to="/auth/login">CONTACT</Link>
                            </li>
                        </nav>
                    )}




                    <nav className="hidden md:flex md:visible justify-center items-center">
                        <ul className="flex gap-10 text-[#000000] cursor-pointer">
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
                                <Link to="/Producttools">PRODUCTS</Link>
                            </li>
                            <li>
                                <Link to="/auth/login">CONTACT</Link>
                            </li>

                        </ul>
                    </nav>
                </div>
            </div>




        </div>

    );

};

export default Header