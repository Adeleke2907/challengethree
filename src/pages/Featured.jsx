import { useState } from 'react'
import { Link } from "react-router-dom";
import image1 from "../assets/Vector.png"
import image2 from "../assets/Rate.png"



const Featured = () => {

    return (
        <>

            <div>
                <h3 className='text-[35px] content-center justify-center flex pt-[50px] pb-[50px]'>FEATURED PRODUCTS</h3>
            </div>

            <div className='flex pb-[50px]'>
                <div className='flex pl-[60px] pr-[50px]'>
                    <div>
                        <img src={image1} alt="logo" />
                    </div>
                    <div className='pl-[20px]'>
                        <p className='text-[18px] text-[#262626] pb-[10px]'>Blue Swade Nike <br />Sneakers</p>
                        <img src={image2} alt="logo" />
                        <p className='text-[#FF4858] text-[20px] pt-[15px]'>$499  <span className='text-[#C1C8CE] text-[20px]'>$599</span></p>
                    </div>
                </div>

                <div className='flex pl-[60px] pr-[50px]'>
                    <div>
                        <img src={image1} alt="logo" />
                    </div>
                    <div className='pl-[20px]'>
                        <p className='text-[18px] text-[#262626] pb-[10px]'>Blue Swade Nike <br />Sneakers</p>
                        <img src={image2} alt="logo" />
                        <p className='text-[#FF4858] text-[20px] pt-[15px]'>$499  <span className='text-[#C1C8CE] text-[20px]'>$599</span></p>
                    </div>
                </div>

                <div className='flex pl-[60px] pr-[50px]'>
                    <div>
                        <img src={image1} alt="logo" />
                    </div>
                    <div className='pl-[20px]'>
                        <p className='text-[18px] text-[#262626] pb-[10px]'>Blue Swade Nike <br />Sneakers</p>
                        <img src={image2} alt="logo" />
                        <p className='text-[#FF4858] text-[20px] pt-[15px]'>$499  <span className='text-[#C1C8CE] text-[20px]'>$599</span></p>
                    </div>
                </div>

            </div>
        </>

    );
};

export default Featured