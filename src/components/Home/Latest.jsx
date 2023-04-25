import image1 from "../../assets/shipping.png"
import image2 from "../../assets/Group11.png"
import image3 from "../../assets/support.png"
import image4 from "../../assets/Nikelogo.png"
import image5 from "../../assets/figmalogo1.png"
import image6 from "../../assets/kronoslogo.png"




const Latest = () => {

    return (
        <>
            <div className='flex pt-[50px]  content-center justify-center gap-10'>
                <div className='pl-[120px] pr-[120px]'>
                    <div className='content-center justify-center flex pb-[20px]'>
                        <img src={image1} alt="logo" />
                    </div>
                    <h3 className='text-[27px] content-center justify-center text-center flex pb-[20px]'>FREE SHIPPING</h3>
                    <p className='content-center justify-center flex text-[18px] text-center' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className=' pl-[120px] pr-[120px]'>
                    <div className='content-center justify-center flex pb-[20px]'>
                        <img src={image2} alt="logo" />
                    </div>
                    <h3 className='text-[27px] content-center justify-center text-center flex pb-[20px]'>100% REFUND</h3>
                    <p className='text-[18px] content-center justify-center flex text-center' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className='pl-[120px] pr-[120px]'>
                    <div className='content-center justify-center flex pb-[20px]'>
                        <img src={image3} alt="logo" />
                    </div>
                    <h3 className='text-[27px] content-center justify-center flex text-center pb-[20px]'>SUPPORT 24/7</h3>
                    <p className='text-[18px] content-center justify-center flex text-center' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

            </div>

            <div>
                <h3 className='text-[34px] content-center justify-center flex pt-[50px] pb-[50px]'>LATEST NEWS</h3>
            </div>

            <div className='flex pb-[50px] content-center justify-center gap-5'>
                <div className='flex pl-[60px] pr-[50px] '>
                    <div className='pt-[50px] w-[40%]'>
                        <img src={image4} alt="logo" className='w-full h-auto'/>
                    </div>
                    <div className='pl-[20px]'>
                        <p className='text-[18px] text-[#C1C8CE]'>01 Jan, 2015</p>
                        <h3 className='text-[#22262A] text-[22px]'>Fashion Industry</h3>
                        <p className='text-[#22262A] text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className='flex pl-[50px] pr-[50px] '>
                    <div className='pt-[50px] w-[40%]'>
                        <img src={image5} alt="logo"  className='w-full h-auto'/>
                    </div>
                    <div className='pl-[20px]'>
                        <p className='text-[18px] text-[#C1C8CE]'>01 Jan, 2015</p>
                        <h3 className='text-[#22262A] text-[22px]'>Fashion Industry</h3>
                        <p className='text-[#22262A] text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>

                <div className='flex pl-[50px] pr-[50px]'>
                    <div className='pt-[50px] w-[40%]'>
                        <img src={image6} alt="logo"  className='w-full h-auto' />
                    </div>
                    <div className='pl-[20px]'>
                        <p className='text-[18px] text-[#C1C8CE]'>01 Jan, 2015</p>
                        <h3 className='text-[#22262A] text-[22px]'>Fashion Industry</h3>
                        <p className='text-[#22262A] text-[18px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Latest