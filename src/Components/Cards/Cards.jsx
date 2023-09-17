// import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Cards.css'

const Cards = () => {
    const [allPlayers, setAllPlayers] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then((res) => res.json())
        .then(data => setAllPlayers(data))
    },[])
//    console.log(allPlayers)
    return (
    <>
      <div className='w-11/12 flex mx-auto py-10'>

        {/* {
            allPlayers.map((player)=>(

            ))
        } */}

        <div className=' w-3/4 mx-auto grid md:grid-cols-3'>
        <div className="player p-4 card  shadow-xl bg-gradient-to-r from-[#ffa253] to-[#ffc145] ">
        <figure><img className="rounded-full" src="https://i.ibb.co/q1F8rtZ/mashrafe-mortaza.webp" alt="Shoes" /></figure>
        <div className="text-white my-3">
            <table className='w-full text-[#145f58] text-lg text-justify '>
                <tbody >
                    <tr  >
                        <th >Name </th> 
                        <td>: Mashrafe Mortaza</td>
                    </tr>
                    <tr>
                         <th >Age </th> 
                        <td>: 37</td>
                    </tr>
                    <tr >
                        <th >Country</th> 
                        <td>: Bangladesh</td>
                    </tr>
                    <tr>
                         <th >Salary </th> 
                        <td>: $60000</td>
                    </tr>

                </tbody>
            </table>
        </div>
        <div className='text-center py-5'>
            <button className='text-white rounded-lg text-lg  bg-[#0158da] px-5  py-1 add-button'>Add this player</button>
        </div>
        </div>
        </div>

        {/* Cart Section ============= */}
        <div className='w-1/4'>
        <Cart></Cart>
        </div>
        </div>

    </>
    );
};

export default Cards;