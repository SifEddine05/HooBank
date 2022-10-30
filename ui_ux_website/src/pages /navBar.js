//import './index.css';
import {  useState } from 'react';
import logo from '../assets/logo.svg' ;
import menu from '../assets/menu.svg' ;

const NavBar= ()=> {
    const [style , setStyle] = useState('hidden sm:flex   flex-end mr-[10%]') ; 
const handlClick =()=>{
    if(style==='hidden sm:flex   flex-end mr-[10%]')
    {
        setStyle('flex flex-col sm:flex   flex-end mr-[10%]');
    }else{
        setStyle('hidden sm:flex   flex-end mr-[10%]')   ; 
    }
}

    return (
      <nav className="w-full flex justify-center sm:justify-between" >
            <img src={logo} alt="logo"  className='w-[124px] h-[32px]  sm: ml-[9.88%] '/>
            <button className='m-2 visible  sm:invisible  ' onClick={handlClick} ><img src={menu} alt="menu icon " /></button>
            <ul className={style}>
                <li className='mr-[10%]   flex items-center  ' ><a href='#home' className='no-underline  text-white hover:text-[#33BBCF]'>Home</a></li>
                <li className='mr-[10%]  flex items-center'><a href='#AboutUs' className='no-underline text-white hover:text-[#33BBCF]'>AboutUs</a></li>
                <li className='mr-[10%] flex items-center ' ><a href='#Features' className='no-underline text-white hover:text-[#33BBCF]'>Features</a></li>
                <li className='  mr-[10%] flex items-center'><a href='#Solution' className='no-underline text-white hover:text-[#33BBCF]'>Solution</a></li>
            </ul>
        </nav>

    ) ; 
} 
export default NavBar ;