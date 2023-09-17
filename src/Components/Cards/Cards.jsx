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

 const handelAddPlayer =()=>{
    console.log('hello world')
 }

    return (
    <>
      <div className='lg:w-11/12 md:w-full w-11/12 flex mx-auto py-10 lg:flex-row flex-col-reverse gap-6'>
        <div className='lg:w-3/4 mx-auto grid md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {
            allPlayers.map((player)=>(
                <div key={player.id} className="player p-4 card  shadow-xl bg-gradient-to-r from-[#ffa253] to-[#ffc145] ">
                <figure><img className="rounded-full" src={player.image} alt="Shoes" /></figure>
                <div className="text-white my-3">
                    <table className='w-full text-[#145f58] text-lg text-justify '>
                        <tbody >
                            <tr  >
                                <th >Name </th> 
                                <td className='font-medium whitespace-nowrap	 '>: {player.name} </td>
                            </tr>
                            <tr>
                                 <th >Age </th> 
                                <td className='font-medium'>: {player.age} </td>
                            </tr>
                            <tr >
                                <th >Country</th> 
                                <td className='font-medium'>: {player.country} </td>
                            </tr>
                            <tr>
                                 <th >Salary </th> 
                                <td className='font-medium'>: ${player.salary} </td>
                            </tr>
        
                        </tbody>
                    </table>
                </div>
                <div className='text-center py-5'>
                    <button onClick={handelAddPlayer} className='text-white rounded-lg text-lg  bg-[#0158da] px-5  py-1 add-button'>Add this player</button>
                </div>
                </div>
            ))
        }
        </div>

        {/* Cart Section ============= */}
        <div className='lg:w-1/4 w-3/4  mx-auto'>
        <Cart></Cart>
        </div>
        </div>

    </>
    );
};

export default Cards;