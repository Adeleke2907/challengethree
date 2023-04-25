import image1 from "../../assets/imageProduct2.png";
import image2 from "../../assets/imageProduct3.png";
import rating from "../../assets/rate.png";
import image3 from "../../assets/Rectangle6.png";
import image4 from "../../assets/imageProduct3.png";
import image5 from "../../assets/imageProduct4.png";
import image6 from "../../assets/imageProduct5.png";
import image7 from "../../assets/Product6.png";
import { IoMdArrowDropdown } from "react-icons/io";
import image8 from "../../assets/Product2.png";
import image9 from "../../assets/Product3.png";
import image10 from "../../assets/Product1.png";
import { AiOutlineUser } from "react-icons/ai";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter2.png";
import line from "../../assets/Rectangle15.png";




function Product() {

    return (
        <>

            <div>
                <div className='pt-[5px] '>
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
                                <img className='pb-[10px]' src={image3} alt="logo" />
                                <p className='text-[#40BFFF] text-[20px] flex gap-3 '>$299,43<del className='text-[#9098B1] text-[14px]'>$534,33</del><span className='text-[#FB7181] text-[14px]'>24% Off</span></p>
                                <p className='text-[#262626] text-[14px] pt-[5px] content-center gap-12 flex'><span>Availability:</span><span>In stock</span></p>
                                <p className='text-[#262626] text-[14px] pt-[5px] content-center gap-14 flex'>Category:<span>Accessories</span></p>
                                <p className='text-[#262626] text-[14px] pt-[5px]'> Free shipping</p>
                                <div className='pt-[10px]'>
                                    <img src={image3} alt="logo" />
                                </div>
                            </div>

                            <div className='flex pt-[10px] gap-6'>
                                <p className='text-[16]'>Select Color:</p>
                                <span className='w-[15px] h-[15px] bg-[#006CFF] text-[#fff] rounded-full items-center top-[20px]'></span>
                                <span className='w-[15px] h-[15px] bg-[#f12d2d] text-[#fff] rounded-full items-center top-[20px]'></span>
                                <span className='w-[15px] h-[15px] bg-[#171717] text-[#fff] rounded-full items-center top-[20px]'></span>
                                <span className='w-[15px] h-[15px] bg-[#FFF600] text-[#fff] rounded-full items-center top-[20px]'></span>

                            </div>

                            <div className='pt-[30px] flex '>
                                <p className='pr-[80px]'>Size</p>
                                <p className='text-[12px] outline-none border-[2px] border-[#F1F3F4] flex pr-5 py-1 content-center justify-center gap-12 pl-[10px] pt-[5px]'> XS<span className='pt-[3px]'> <IoMdArrowDropdown /> </span></p>
                            </div>

                        </div>

                        <div className='pb-[50px] w-fit' >
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

                <div className='grid '>
                    <div className='flex pl-[150px]'>
                        <div className='flex gap-3'>
                            <img className='w-[20%] h-[100%]' src={image8} alt="logo" />
                            <img className='w-[20%] h-[100%] ' src={image9} alt="logo" />
                            <img className='w-[20%] h-[100%] border-[#40BFFF] border-2' src={image1} alt="logo" />
                            <img className='w-[20%] h-[100%]' src={image10} alt="logo" />
                        </div>
                        <div className='pr-[150px] pt-[40px]'>
                            <p className='text-[12px] outline-none border-[2px] border-[#F1F3F4] flex content-center justify-center py-1  pl-[7px] pt-[5px] pr-[7px] gap-12'><span>-</span> <span>2</span><span>+</span></p>
                        </div>
                        <div className='pr-[150px] pt-[40px]'>
                            <p className='text-[12px] outline-none border-[2px] border-[#F1F3F4] bg-[#33A0FF] px-5 pt-[5px] pb-[5px] flex gap-5'><span><AiOutlineUser /></span><span className='flex'>Add&nbsp;To&nbsp;Cart</span></p>
                        </div>
                    </div>

                    <div className='content-center justify-center gap-5 pt-[40px] text-[white] flex'>
                        <div className='text-[12px] outline-none border-[2px] border-[#F1F3F4] bg-[#33A0FF] rounded-[5px] px-12 pt-[5px] pb-[5px] flex gap-5' >
                            <img src={facebook} alt="logo" />
                            <p>Share&nbsp;on&nbsp;Facebook</p>
                        </div>
                        <div className='text-[12px] outline-none border-[2px] border-[#F1F3F4] bg-[#33A0FF] rounded-[5px] px-12 pt-[5px] pb-[5px] flex gap-5' >
                            <img src={twitter} alt="logo" />
                            <p>Share&nbsp;on&nbsp;Twitter</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#F6F7F8] mt-[50px] mr-[150px] ml-[150px] pr-[10px] pl-[10px] pb-[10px]'>
                    <div className='text-[#22262A] text-[18px] content-center justify-center text-center  pb-[20px] pt-[20px] border-[#E5E8EA]'>
                        <p><span className='text-[#33A0FF] gap-5'>Product Infomation</span>&nbsp;&nbsp;<span className='text-[#262626]'>&nbsp;Reviews&nbsp;<span className='text-[16px] text-[#262626]'>0</span> &nbsp;</span> <span className='text-[#262626]'>Another tab</span></p>
                        <img className='' src={line} alt="logo" />
                    </div>
                    <p className='text-[#9098B1] text-[12px]'>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.<br />

                        air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.<br />

                        air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.
                    </p>
                </div>

                <div className='pt-[50px]'>
                    <div className=''>
                        <h3 className='text-center text-[#22262A] text-[35px]'>RELATED PRODUCTS</h3>

                    </div>


                    <div className='flex flex-wrap gap-1.5 pt-[50px] pb-[50px] content-center justify-center w-full'>
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