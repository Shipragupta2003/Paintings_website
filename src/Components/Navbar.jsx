import React , {useState} from 'react';
import logo from '../images/logo.png';
import {Link} from 'react-scroll';

function Navbar(){
    const[nav,setnav]=useState(false);
    const changeBackground = ()=> {
        if (window.scrollY >=50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);

    return(
        <nav className={nav ? "nav active" : "nav"}>
            <Link to='main' className='logo' smooth={true} duration ={2000}>
                <img src ={logo} alt=''/>
            </Link>
            <input className='menu-btn' type='checkbox' id='menu-btn'/>
            <label className='menu-icon' for ='menu-btn'>
                <span className='nav-icon'>
            </span>
            </label>
            <ul classname='menu'>
            <li><Link to='main' smooth={true} duration ={1000}>Home</Link></li>
            <li><Link to='Paintings' smooth={true} duration ={1000}>Paintings</Link></li>
            <li><Link to='about' smooth={true} duration ={1000}>About</Link></li>
            <li><Link to='main' smooth={true} duration ={1000}>Offers</Link></li>
            <li><Link to='contact' smooth={true} duration ={1000}>Contact</Link></li>
            </ul>

        </nav>
    )
}
export default Navbar;