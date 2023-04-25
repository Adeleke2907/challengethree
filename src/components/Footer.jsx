import logo from "../assets/image.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import Card2 from "../assets/Master.png";
import Card4 from "../assets/Visa.png";
import Card3 from "../assets/Paypal.png";
import Card1 from "../assets/Westernunion.png";



function Footer() {

    return (
        <footer className='bg-[#BCDDFE] pt-[30px]'>
            <div className='flex justify-between items-center pr-[200px] pl-[60px] pt-[50px] w-full'>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[14px] '>
                    <img src={logo} alt="" />
                    <br />
                    <p className='text-[12px] font-light'>Lorem Ipsum is simply dummy text of the <br />printing and typesetting industry. Lorem<br /> Ipsum has been the industry's standard, <br />dummy text ever.Since the 1500s when <br />an unknown printer.</p>
                </div>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[18px] pt-[20px]'>
                    <p >Follow Us<br /><span className='text-[12px] font-light'>Since the 1500s, when an unknown <br />printer took a galley of type and <br />scrambled.</span></p>
                    <span className='flex justify-between pr-[150px] pt-[10px]'>
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                    </span>

                </div>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[18px] pt-[20px]'>
                    <p >Contact Us <br /> <br /><span className='text-[12px] font-light'>E-Comm , 4578 <br />Marmora Road, <br />Glasgow D04 89GR</span></p>
                </div>
            </div>

            <div className='flex justify-between items-center pr-[100px] pl-[60px] pt-[50px] w-full'>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[18px]'>
                    <p >Infomation <br /> <br /><span className='text-[12px] font-light'>About Us<br />Infomation<br />Privacy Policy<br />Terms & Conditions</span></p>
                </div>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[18px]'>
                    <p >Service<br /> <br /><span className='text-[12px] font-light'>About Us<br />Infomation<br />Privacy Policy<br />Terms & Conditions</span></p>
                </div>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[18px]'>
                    <p >My Account <br /> <br /><span className='text-[12px] font-light'>About Us<br />Infomation<br />Privacy Policy<br />Terms & Conditions</span></p>
                </div>
                <div className='text-[#22262A] text-[10px] font-light lg:text-[18px]'>
                    <p >Our Offers <br /> <br /><span className='text-[12px] font-light'>About Us<br />Infomation<br />Privacy Policy<br />Terms & Conditions</span></p>
                </div>
            </div>

            <div className='flex justify-end pt-[50px] pb-[30px] pr-[90px] gap-3'>
                <img src={Card1} alt="card1" />
                <img src={Card2} alt="card2" />
                <img src={Card3} alt="card3" />
                <img src={Card4} alt="card4" />
            </div>

        </footer >
    )
}

export default Footer