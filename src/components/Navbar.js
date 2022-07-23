import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return ( 
        <div className='flex flex-row justify-end p-3' >
            <ConnectButton/>
        </div>
     );
}
 
export default Navbar;