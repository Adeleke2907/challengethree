import { useState } from 'react'
import { Link } from "react-router-dom";
import Promo from "../../assets/Promotion.png";
import image1 from "../../assets/imageProduct3.png"
import rating from "../../assets/rate.png"



const Bestseller = () => {

    return (
        <>
            <div className='pt-[50px] pb-[50px] pl-[60px] pr-[60px]'>
                <div>
                    <h3 className='content-center justify-center flex text-[#22262A] text-[35px]'>BEST SELLER</h3>
                    <div className='flex text-[#22262A] text-[22px] justify-between pl-[350px] pr-[350px] pt-[20px]'>
                        <span className='text-[#33A0FF]'><p>All</p></span>
                        <p>Bags</p>
                        <p>Sneakers</p>
                        <p>Belt</p>
                        <p>Sunglasses</p>
                    </div>
                </div>

                <div className='flex pt-[30px]'>
                    <div className='content-center justify-center border-[3px] border-[#F6F7F8] mr-[30px]'>
                        <img src={image1} alt="logo" />
                        <h6 className='content-center justify-center flex'>Nike Air Max 270 React</h6>
                        <div className='content-center justify-center flex'>
                            <img src={rating} alt="logo" className='' />
                        </div>
                        <p className='text-[#40BFFF] text-[18px] content-center justify-center flex'>$299,43<span></span><span className='text-[#9098B1] text-[14px]'>$534,33</span><span className='text-[#FB7181] text-[14px]'>24% Off</span></p>
                    </div>



                </div>



            </div >


        </>

    );
};

export default Bestseller