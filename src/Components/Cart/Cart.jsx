// import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

const Cart = () => {
    return (
        <div>
            <div className='mx-auto'>
            <h1 className="text-2xl py-4 font-semibold text-[#ffa253] flex justify-center items-center"> <span className='pr-3' > <FaUserAlt></FaUserAlt></span> Players Added : 1</h1>
            <h1 className="text-2xl pb-4  font-semibold text-[#ffa253] text-center "> Total Cost : $175000</h1>
            </div>

        <div className=" flex items-center justify-between player rounded-lg shadow-xl bg-gradient-to-r from-[#ffa253] to-[#ffc145] pr-3">
         <div className="w-1/5">
            <img className="rounded-lg " src="https://i.ibb.co/q1F8rtZ/mashrafe-mortaza.webp" alt="Shoes" />
            </div>
         <div className=" text-xl font-semibold text-[#145f58]">
             <h1>Mushfiqur Rahim</h1>
         </div>
         <div className=" bg-white rounded-full text-green-800 text-4xl">
            <BsCheckCircleFill ></BsCheckCircleFill>
         </div>

        </div>

        </div>
    );
};

export default Cart;