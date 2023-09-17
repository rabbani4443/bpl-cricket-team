import PropTypes from 'prop-types';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';

const Cart = ({addPlayers,totalCost,totalRemaining}) => {

    return (
        <div>
            <div className='mx-auto'>
            <h1 className="text-2xl pb-4 font-semibold text-[#ffa253] flex justify-center items-center"> <span className='pr-3' > <FaUserAlt></FaUserAlt></span> Players Added : {addPlayers.length}</h1>
            <h1 className="text-2xl pb-4  font-semibold text-[#ffa253] text-center "> Total Cost : ${totalCost} </h1>
            <h1 className="text-2xl pb-4  font-semibold text-[#ffa253] text-center "> Remaining : ${totalRemaining} </h1>
            </div>
            {
                addPlayers.map((addSinglePlayer)=>(
                    <div key={addSinglePlayer.id} className='pb-5'>
                    <div  className=" flex items-center justify-between player rounded-lg shadow-xl bg-gradient-to-r from-[#ffa253] to-[#ffc145] pr-3">
                    <div className="w-1/5">
                       <img className="rounded-lg " src={addSinglePlayer.image} alt="Shoes" />
                       </div>
                    <div className=" text-xl font-medium text-[#145f58]">
                        <h1>{addSinglePlayer.name} </h1>
                    </div>
                    <div className=" bg-white rounded-full text-green-800 text-4xl">
                       <BsCheckCircleFill ></BsCheckCircleFill>
                    </div>
                    </div>
                   </div>
                ))
            }
        </div>
    );
};

Cart.propTypes = {
    addPlayers:PropTypes.array,
    totalRemaining:PropTypes.number,
    totalCost:PropTypes.number
};

export default Cart;