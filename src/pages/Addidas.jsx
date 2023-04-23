import { useState } from 'react'
import { Link } from "react-router-dom";
import Image from "../assets/image1.png";
import Image1 from "../assets/Rectangle15.png";




const Addidas = () => {

    return (
        <div className='pb-[50px]'>
            <div
                style={{
                    backgroundImage: `url(${Image})`,

                }}>
                <h3 className='text-white pt-[200px] pb-[20px] pl-[60px] text-[64px] items-center'>Adidas Men Runnings<br />Sneakers</h3>
                <p className='text-[#FFFFFF] pl-[60px] text-[24px]'>Performance and design. Taken right to the edge.</p>
                <div className='pt-[30px] '>
                    <h3 className='text-[#FFFFFF] text-[20px] pl-[60px]'>SHOP NOW</h3>
                    <div className='pl-[60px]'>
                        <img src={Image1} alt="logo" />
                    </div>
                </div>
            </div >


        </div >

    );
};

export default Addidas