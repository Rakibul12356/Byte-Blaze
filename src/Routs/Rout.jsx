

import Footer from '../components/Footer/Footer';
import Navber from '../components/Navber';
import { Outlet } from 'react-router-dom';

const Rout = () => {
    return (
        <div className=' mx-auto'>
           <div className='h-16'>
           <Navber></Navber>
           </div>
           <div className='min-h-[calc(100vh-166px)]'><Outlet></Outlet></div>
           <Footer></Footer>

        </div>
    );
};

export default Rout;