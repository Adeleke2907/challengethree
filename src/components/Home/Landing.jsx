import { useState } from 'react'
import { Link } from "react-router-dom";
import Promo from "../../assets/Promotion.png";



const Landing = () => {

    return (
        <div>
            <div
                style={{
                    backgroundImage: `url(${Promo})`,
                    backgroungSize: 'cover',
                }}>
                <h3 className='text-white pt-[300px] pb-[166px] pl-[60px] text-[64px] items-center'>Super Flash Sale<br />50% Off</h3>
            </div >


        </div >

    );
};

export default Landing