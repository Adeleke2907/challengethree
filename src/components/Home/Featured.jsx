import image1 from "../../assets/Vector.png"
import image2 from "../../assets/rate.png"



const Featured = () => {

    return (
        <>
            <div>
                <div>
                    <h3 className='text-[35px] content-center justify-center flex pt-[50px] pb-[50px]'>FEATURED PRODUCTS</h3>
                </div>
                <div className='flex flex-wrap gap-5 pb-[50px] content-center justify-center '>
                    <div className='flex pl-[60px] pr-[50px]'>
                        <div>
                            <img src={image1} alt="logo" />
                        </div>
                        <div className='pl-[20px]'>
                            <p className='text-[18px] text-[#262626] pb-[10px]'>Blue Swade Nike <br />Sneakers</p>
                            <img src={image2} alt="logo" />
                            <p className='text-[#FF4858] text-[20px] pt-[15px]'>$499  <del className='text-[#C1C8CE] text-[20px]'>$599</del></p>
                        </div>
                    </div>
                    <div className='flex pl-[60px] pr-[50px]'>
                        <div>
                            <img src={image1} alt="logo" />
                        </div>
                        <div className='pl-[20px]'>
                            <p className='text-[18px] text-[#262626] pb-[10px]'>Blue Swade Nike <br />Sneakers</p>
                            <img src={image2} alt="logo" />
                            <p className='text-[#FF4858] text-[20px] pt-[15px]'>$499  <del className='text-[#C1C8CE] text-[20px]'>$599</del></p>
                        </div>
                    </div>
                    <div className='flex pl-[60px] pr-[50px]'>
                        <div>
                            <img src={image1} alt="logo" />
                        </div>
                        <div className='pl-[20px]'>
                            <p className='text-[18px] text-[#262626] pb-[10px]'>Blue Swade Nike <br />Sneakers</p>
                            <img src={image2} alt="logo" />
                            <p className='text-[#FF4858] text-[20px] pt-[15px]'>$499  <del className='text-[#C1C8CE] text-[20px]'>$599</del></p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mb-[50px] mt-[20px] text-[#262626]">
                    <input
                        className=" text-[18px] outline-none border-[2px] border-[#BCDDFE] rounded-1-lg md:pr-20 pl-4 py-1.5 px-10 md:py-4"
                        type="text"
                        placeholder="Search query..."
                    />
                    <button className="bg-[#40BFFF] text-white py-2.5 md:py-4 px-4 md:px-8 font-semibold md:text-xl">Search</button>
                </div>
            </div>
        </>

    );
};

export default Featured