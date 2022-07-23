import React from 'react';

const Homepage = () => {
    return ( 
        <div className='flex flex-row w-screen h-screen '>
            <div className='flex flex-col w-[50%] h-screen items-end justify-center mr-14' >
                <img src='https://svgshare.com/i/jU4.svg' className='w-[60%]'  />
            </div>
            <div className='flex flex-col w-[50%] h-screen ml-14 justify-center' >
                <label className='text-black text-3xl font-semibold' >Rainbow tinted rainbow <br/> Sunglasses</label>
                <p className='font-medium mt-2' >Mammoth</p>
                <img src='https://svgshare.com/i/jSr.svg' className='w-[13%] mt-5' />
                <p className='mt-5 font-bold text-2xl' >$ 240</p>
                <p className='text-xl font-light text-gray-600 mt-3' >Distinctive and directional with a vintage slant, sunglasses label <br/> Jeepers Peepers are famed for their retro frames, placing <br/> an offbeat spin on classic styles.</p>
                <button className='p-2 rounded-lg bg-blue-600 text-white w-[40%] px-14 mt-10' >Pay with Credit Card</button>
                <button className='p-2 rounded-lg bg-violet-900 text-white w-[40%] px-14 mt-2' >Pay with Rewards</button>
            </div>
        </div>
     );
}
 
export default Homepage;