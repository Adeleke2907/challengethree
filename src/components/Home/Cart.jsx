import Header from "../../components/Header";
import Footer from "../../components/Footer";
import image1 from "../../assets/imageProduct2.png";
import image2 from "../../assets/imageProduct3.png";


const Cart = () => {
    return (
        <>
            <Header />
            <div>
                <div className='text-[#22262A] text-[18px] text-center w-full md:w-full bg-[#F6F7F8] py-1.5'>
                    <p><span className='text-[#33A0FF]'>Home</span>&nbsp;<span className='text-[#33A0FF]'> &nbsp;Hot Deal &nbsp;&nbsp;</span> <span className='text-[#262626]'>Nike Airmax 270 React</span></p>
                </div>

                <div className="content-center justify-center flex gap-14 w-fit pt-[50px]">
                    <p className="pl-[100px]" >PRODUCT</p>
                    <p className="content-center justify-center flex gap-14 pl-[550px]"><span > PRICE</span><span className="pl-[20px]"> QTY</span><span className="pl-[90px]"> UNIT PRICE</span></p>
                </div>

                <div className="pt-[50px] flex pb-[20px]">
                    <img className='w-[20%] h-[100%] pl-[100px]' src={image1} alt="logo" />
                    <p className="pt-[70px] pl-[10px]">Nike Airmax 270 react</p>
                    <div>
                        <p className="content-center justify-center flex gap-14 pl-[330px] pt-[50px]"><span > $998</span>
                            <span
                                className='text-[12px] outline-none border-[2px] border-[#F1F3F4] flex content-center justify-center py-1 px-2 pl-[7px] pt-[px] pr-[7px] pb-[1px] gap-7'><span>-</span> <span>2</span><span>+</span>
                            </span>
                            <span className="pl-[80px]"> $499</span></p>
                    </div>
                </div>

                <div className="pt-[50px] flex pb-[20px]">
                    <img className='w-[20%] h-[100%] pl-[100px]' src={image2} alt="logo" />
                    <p className="pt-[70px] pl-[10px]">Nike Airmax 270 react</p>
                    <div>
                        <p className="content-center justify-center flex gap-14 pl-[330px] pt-[50px]"><span > $998</span>
                            <span
                                className='text-[12px] outline-none border-[2px] border-[#F1F3F4] flex content-center justify-center py-1 px-2 pl-[7px] pt-[px] pr-[7px] pb-[1px] gap-7'><span>-</span> <span>2</span><span>+</span>
                            </span>
                            <span className="pl-[80px]"> $499</span></p>
                    </div>
                </div>

                <div className="flex justify-center items-center  pb-[40pxs]">
                    <div className="flex justify-center items-center ] mt-[10px] text-[#262626]">
                        <input
                            className=" text-[14px] outline-none border-[2px] border-[#BCDDFE] rounded-1-lg md:pr-20 pl-2 py-0.7 px-5 md:py-1"
                            type="text"
                            placeholder="Voucher code"
                        />
                        <button className="bg-[#40BFFF] text-white py-1 md:py-1 px-2 md:px-4 font-semibold md:text-xl">Redeem</button>
                    </div>
                    <div grid>
                        <div className="pl-[500px] pt-[20px]  pb-[20px]">
                            <p className='text-[#262626] text-[18px] pt-[5px] content-center gap-12 flex'><span>Subtotal:</span><span className="pl-[50px]">$998</span></p>
                            <p className='text-[#262626] text-[18px] pt-[5px] content-center gap-12 flex'>Shipping fee:<span className="pl-[15px]">$20</span></p>
                            <p className='text-[#262626] text-[18px] pt-[5px] content-center gap-12 flex'>Coupon:<span className="pl-[53px]">No</span></p>
                            <h3 className='text-[#262626] text-[30px] pt-[5px] content-center gap-12 flex'>TOTAL<span className="pl-[38px]">$118</span></h3>
                            <div className='text-[18px] outline-none border-[2px] text-[#FFFFFF] bg-[#33A0FF] rounded-[5px] py-2 pl-[70px]'>Check out</div>
                        </div>

                    </div>

                </div>
            </div>
            <Footer />
        </>

    )
}
export default Cart