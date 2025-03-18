
import { FaShopify } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import './Navbar.css'
import { Link } from 'react-router-dom';
//<Link to={'/shop'}>shop</Link>
//<Link to={'/log'}>Login</Link>
//<Link to={'/cart1'}></Link>
//



function Navbar(){
    return(
        <div className='head1'>
        <FaShopify className='icon1'/>
        <h1>Shopping Mall</h1>
        <li><Link to={'/art1'}>Shop</Link></li> 
        <li><Link to={'/cart'}>Shop</Link></li> 
        <button className='btn1'><Link to={'/log'}>Login</Link></button>
        <div>
        <IoCartOutline className='icon2'></IoCartOutline>
        
        </div>

    </div>
    )
}
export default Navbar;