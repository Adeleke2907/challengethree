import { useState } from 'react'
import Header from "../Header";
import Footer from "../Footer";
import image1 from "../../assets/imageProduct2.png";
import image2 from "../../assets/imageProduct3.png";
import rating from "../../assets/rate.png";
import image3 from "../../assets/Rectangle6.png";
import image4 from "../../assets/imageProduct3.png"
import image5 from "../../assets/imageProduct4.png"
import image6 from "../../assets/imageProduct5.png"
import image7 from "../../assets/product6.png"



function Product() {

    return (
        <>

            <div>
                <div className='pt-[5px]'>
                    <div className='text-[#22262A] text-[18px] text-center w-full bg-[#F6F7F8] py-1.5'>
                        <p><span className='text-[#33A0FF]'>Home</span>&nbsp;<span className='text-[#33A0FF]'> Hot Deal &nbsp;</span> <span className='text-[#262626]'>Nike Airmax 270 React</span></p>
                    </div>

                    <div className='flex pt-[42.28px] pl-[150px] pr-[150px] gap-10'>
                        <div className='px-[-50px]'>
                            <img src={image1} alt="logo" />
                        </div>
                        {/* w-[50%] h-[auto] */}

                        <div>
                            <h4>Nike Airmax 270 React</h4>
                            <div className='flex pt-[10px]'>
                                <div >
                                    <img className='pt-[3px] ' src={rating} alt="logo" />
                                </div>
                                <p className='text-[#C1C8CE] text-[16px]'>&nbsp;&nbsp;0 reviews &nbsp;&nbsp;<span className='text-[#33A0FF]'>Submit a review</span></p>
                            </div>
                            <div className='pt-[10px]'>
                                <img src={image3} alt="logo" />
                            </div>
                            <div className='pt-[10px]'>
                                <p className='text-[#40BFFF] text-[20px] flex gap-3 '>$299,43<del className='text-[#9098B1] text-[14px]'>$534,33</del><span className='text-[#FB7181] text-[14px]'>24% Off</span></p>

                            </div>


                        </div>


                        <div className='pb-[50px]'>
                            <h4 className='pb-[20px]'>BEST SELLER</h4>
                            <div className='border-[3px] border-[#F6F7F8]'>
                                <img src={image2} alt="logo" />
                                <div className='content-center justify-center flex pt-[1px] pb-[10px]'>
                                    <img src={rating} alt="logo" className='' />
                                </div>
                                <p className='content-center justify-center flex'><span className='text-[#FB7181] text-[14px]'>24% Off</span>&nbsp;&nbsp;<del className='text-[#9098B1] text-[14px]'>$534,33</del></p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className=''>
                    <div className=''>
                        <h3 className='text-center text-[#22262A] text-[35px]'>RELATED PRODUCTS</h3>

                    </div>

                    <div className='flex flex-wrap gap-1.5 pt-[83.76px] pb-[87.76px] content-center justify-center w-full'>
                        <div className='border-[3px] border-[#F6F7F8]'>
                            <img src={image4} alt="logo" />
                            <h6 className='text-center pt-[10px]'>Nike Air Max 270 React</h6>
                            <div className='content-center justify-center flex pt-[10px] pb-[10px]'>
                                <img src={rating} alt="logo" className='' />
                            </div>
                            <p className='text-[#40BFFF] text-[18px] content-center justify-center flex gap-3 items-center'>$299,43<del className='text-[#9098B1] text-[14px]'>$534,33</del><span className='text-[#FB7181] text-[14px]'>24% Off</span></p>
                        </div>

                        <div className=' border-[3px] border-[#F6F7F8]'>
                            <img src={image5} alt="logo" />
                            <h6 className='text-center pt-[10px]'>Nike Air Max 270 React</h6>
                            <div className='content-center justify-center flex pt-[10px] pb-[10px]'>
                                <img src={rating} alt="logo" className='' />
                            </div>
                            <p className='text-[#40BFFF] text-[18px] content-center justify-center flex gap-3'>$299,43<span></span><del className='text-[#9098B1] text-[14px]'>$534,33</del><span className='text-[#FB7181] text-[14px]'>24% Off</span></p>
                        </div>

                        <div className=' border-[3px] border-[#F6F7F8]'>
                            <img src={image6} alt="logo" />
                            <h6 className='text-center pt-[10px]'>Nike Air Max 270 React</h6>
                            <div className='content-center justify-center flex pt-[10px] pb-[10px]'>
                                <img src={rating} alt="logo" className='' />
                            </div>
                            <p className='text-[#40BFFF] text-[18px] content-center justify-center flex gap-3'>$299,43<span></span><del className='text-[#9098B1] text-[14px]'>$534,33</del><span className='text-[#FB7181] text-[14px]'>24% Off</span></p>
                        </div>

                        <div className=' border-[3px] border-[#F6F7F8]'>
                            <img src={image7} alt="logo" />
                            <h6 className='text-center pt-[10px]'>Nike Air Max 270 React</h6>
                            <div className='content-center justify-center flex pt-[10px] pb-[10px]'>
                                <img src={rating} alt="logo" className='' />
                            </div>
                            <p className='text-[#40BFFF] text-[18px] content-center justify-center flex gap-3'>$299,43<span></span><del className='text-[#9098B1] text-[14px]'>$534,33</del><span className='text-[#FB7181] text-[14px]'>24% Off</span></p>
                        </div>

                    </div>
                </div>
            </div>





        </>
    )
}

export default Product