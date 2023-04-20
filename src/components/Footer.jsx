import { useState } from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/image.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import cards from "../assets/Brands.png";


function Footer() {

    return (
        <footer className='bg-[#BCDDFE]'>
            <div className='flex justify-between items-center pr-[200px] pl-[80px] pt-[70px] w-full md-flex'>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[14px]'>
                    <img src={logo} alt="" />
                    <br />
                    <p className='text-[12px]'>Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry. Lorem<br /> Ipsum has been the industry's standard, <br />dummy text ever.Since the 1500s when <br />an unknown printer.</p>
                </div>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[18px]'>
                    <p >Follow Us<br /><span className='text-[12px]'>Since the 1500s, when an unknown <br />printer took a galley of type and <br />scrambled.</span></p>
                    <span className='flex justify-between pr-[150px] pt-[10px]'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                    </span>

                </div>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[18px]'>
                    <p >Contact Us <br /> <br /><span className='text-[12px]'>E-Comm , 4578 <br />Marmora Road, <br />Glasgow D04 89GR</span></p>
                </div>
            </div>

            <div className='flex justify-between items-center pr-[100px] pl-[80px] pt-[50px] w-full md-flex'>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[18px]'>
                    <p >Infomation <br /> <br /><span className='text-[12px]'>About Us<br />Infomation<br />Privacy Policy<br />Terms & Conditions</span></p>
                </div>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[18px]'>
                    <p >Service<br /> <br /><span className='text-[12px]'>About Us<br />Infomation<br />Privacy Policy<br />Terms & Conditions</span></p>
                </div>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[18px]'>
                    <p >My Account <br /> <br /><span className='text-[12px]'>About Us<br />Infomation<br />Privacy Policy<br />Terms & Conditions</span></p>
                </div>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[18px]'>
                    <p >Our Offers <br /> <br /><span className='text-[12px]'>About Us<br />Infomation<br />Privacy Policy<br />Terms & Conditions</span></p>
                </div>
            </div>

            <div className='item-right pt-[50px] pb-[50px] w-full'>
                <img src={cards} alt="" />
            </div>

        </footer >
    )
}

export default Footer