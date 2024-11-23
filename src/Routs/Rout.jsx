

import Navber from '../components/Navber';
import { Outlet } from 'react-router-dom';

const Rout = () => {
    return (
        <div className=' mx-auto'>
           <div className='h-16'>
           <Navber></Navber>
           </div>
           <Outlet></Outlet>
        </div>
    );
};

export default Rout;