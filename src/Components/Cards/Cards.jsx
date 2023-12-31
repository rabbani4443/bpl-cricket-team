// import React from 'react';
import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Cards.css'
import { BsCheckAll } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = () => {
    const [allPlayers, setAllPlayers] = useState([]);
    const [addPlayers, setAddPlayers] =useState([]);
    const [buttonTexts, setButtonTexts] = useState({});
    const [totalCost, setTotalCost] = useState(0);
    const [totalRemaining,setTotalRemaining] = useState(4000)


    useEffect(()=>{
        fetch('data.json')
        .then((res) => res.json())
        .then(data => setAllPlayers(data))
    },[])
  // console.log(allPlayers)


 const handelAddPlayer =(resPlayer)=>{
    const isExist = addPlayers.find( item=> item.id === resPlayer.id)
    // console.log(isExist)

    let playerSalary = resPlayer.salary;
    if (isExist) {
       return toast.warn(' Wow so easy!', {
        theme: "colored",
        });
    }else{
        
        if(addPlayers.length > 6){
            return toast.warn(' You can hire just 07 players!', {
                theme: "dark",
                });
        }

        addPlayers.forEach(price =>{
            playerSalary = playerSalary + price.salary
        });
        // console.log(playerSalary)
        const totalPriceRemaining = 4000 - playerSalary;
        
        if (playerSalary > 4000) {
            return toast.warn(' Your balance is over!', {
                theme: "colored",
                });
        }else{
            setTotalCost(playerSalary)
            setTotalRemaining (totalPriceRemaining);
        }
        setAddPlayers([...addPlayers, resPlayer])
        setButtonTexts(prevTexts => ({ ...prevTexts, [resPlayer.id]: <div className=' flex items-center'>
            <div className='rounded-full h-max text-white text-2xl '> 
            <BsCheckAll ></BsCheckAll>  </div>
            <div className='text-white '>Player Added </div>
        </div>  }));
    }
 };
// console.log(addPlayers)

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
                                <td className='font-medium whitespace-nowrap'>: {player.name} </td>
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
                    <button 
                    onClick={()=>handelAddPlayer(player)} 
                    className='text-white rounded-lg text-lg  bg-[#0158da] px-5  py-1 add-button'>
                        {buttonTexts[player.id] || "Add this player"}
                    </button>
                </div>
                </div>
            ))
        }
        </div>

        {/* Cart Section ============= */}
        <div className='lg:w-1/4 w-3/4  mx-auto'>
        <Cart addPlayers={addPlayers} totalCost={totalCost} totalRemaining={totalRemaining}></Cart>
        </div>
        </div>
        <ToastContainer />
    </>
    );
};

export default Cards;