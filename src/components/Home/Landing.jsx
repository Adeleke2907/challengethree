import { useState } from 'react'
import { Link } from "react-router-dom";
import Promo from "../../assets/Promotion.png";
import autoprefixer from 'autoprefixer';
import Image1 from "../../assets/imageProduct6.png"
import Image2 from "../../assets/imageProduct1.png"
import Image3 from "../../assets/imageProduct2.png"



const Landing = () => {

    return (
        <div className=''>
            <div className=''>
                <div
                    className='bg-cover bg-no-repeat w-full md:w-full'
                    style={{
                        backgroundImage: `url(${Promo})`,
                        //     backgroundRepeat: "no-repeat",
                        //     backgroundSize: "cover",
                    }}
                >
                    <h3 className=" text-white pt-[150px] pb-[200px] pl-[60px] text-[60px] items-center">Super Flash Sale<br />50% Off</h3>
                </div >
            </div>


            <div className='relative justify-center items-center pb-[300px] pl-[40px]'>
                <div className='absolute flex justify-center items-center top-[-100px]'>
                    <div
                        style={{
                            backgroundImage: `url(${Image1})`,
                        }}>
                        <h6 className='text-[#223263] text-[20px] pt-[20px] pl-[20px]'>FS - QUILTED MAXI <br />CROSS BAG</h6>
                        <p className='text-[#9098B1] text-[30px] content-center justify-center flex pt-[210px] pl-[20px]'>$534,33<span className='text-[#FB7181] text-[18px] pl-[80px]'>24% Off</span><span className='text-[#40BFFF] pt-[10px] pb-[10px] pr-[10px]'>$299,43</span></p>
                    </div>

                    <div
                        style={{
                            backgroundImage: `url(${Image2})`,
                        }}>
                        <div className='flex gap-3'>
                            <h6 className='content-center justify-center flex text-[20px] text-[#223263] pl-[20px] pt-[20px]' >FS - FS - Nike Air <br />Max 270 React...</h6>
                            <p className='text-[#40BFFF] text-[30px] pl-[110px] pt-[20px] pr-[10px]'>$299,43</p>
                        </div>
                        <p className='text-[#9098B1] text-[18px] content-center justify-center flex gap-3 pt-[250px]'>$534,33<span className='text-[18px] text-[#FB7181]'>24% Off</span></p>

                    </div>

                    <div
                        style={{
                            backgroundImage: `url(${Image3})`,
                        }}>
                        <h6 className='flex text-[20px] text-[#223263] pl-[20px] pt-[20px]'>FS - Nike Air <br />Max 270 React...</h6>
                        <p className='text-[#40BFFF] text-[18px] content-center justify-center flex gap-3 pl-[20px]'>$534,33<span className='text-[#FB7181] text-[14px]'>24% Off</span><span className='text-[30px] text-[#40BFFF] pr-[10px] pl-[110px] pt-[229px]'>$299,43</span></p>
                    </div>

                </div>
            </div>



        </div >

    );
};

export default Landing