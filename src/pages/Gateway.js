import React from 'react';

const Gateway = () => {
    return ( 
        <div className='flex flex-row w-screen h-screen items-center justify-center bg-violet-600 '>
            <div className='flex flex-col w-[30%] h-fit bg-white border-2 shadow-xl rounded-xl p-9' >
                <p className='text-white bg-violet-600 p-4 justify-center items-center text-center text-2xl mb-5 font-bold rounded-xl' >Rewards Gateway</p>
                <p className='text-2xl font-bold' >Order #0129</p>
                <hr className='mt-3 mb-3' />
                <p className='text-xl font-light text-gray-600' >Merchant : </p>
                <p className='text-xl font-light text-gray-600' >Amount : </p>
                <hr className='mt-3 mb-3' />
                <p className='text-xl font-light text-gray-600' >Loyalty Program : </p>
                <p className='text-xl font-light text-gray-600' >Loyalty Points : </p>
                <p className='text-xl font-light text-gray-600' >Points to gain : </p>
                <hr className='mt-3 mb-3' />
                <button className='bg-violet-600 text-white p-3 rounded-xl mb-2 hover:bg-violet-900 ' >Approve spent</button>
                <button className='bg-violet-600 text-white p-3 rounded-xl hover:bg-violet-900' >Pay with USDC</button>
        </div>
        </div>
     );
}
 
export default Gateway;