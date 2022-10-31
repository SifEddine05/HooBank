//import './index.css';
import {  useState } from 'react';
import logo from '../assets/logo.svg' ;
import menu from '../assets/menu.svg' ;

const NavBar= ()=> {
    const [style , setStyle] = useState(false) ; 
const handlClick =()=>{
    if(style===false)
    {
        setStyle(true);
    }else{
        setStyle(false)   ; 
    }
}

    return (
      <nav className=" w-full flex-col justify-center items-center sm:flex sm:flex-row sm:justify-between sm:items-center" >
          <div className='w-full flex justify-center sm:inline'>
                <img src={logo} alt="logo"  className='w-[124px] h-[32px]  sm: ml-[9.88%] '/>
                <button className=' ml-1  sm:hidden  ' onClick={handlClick} ><img src={menu} alt="menu icon " /></button>
          </div>
            
            <ul className="hidden sm:flex   flex-end mr-[10%]">
                <li className='mr-[10%]   flex items-center  ' ><a href='#home' className='no-underline  text-white hover:text-[#33BBCF]'>Home</a></li>
                <li className='mr-[10%]  flex items-center'><a href='#AboutUs' className='no-underline text-white hover:text-[#33BBCF]'>AboutUs</a></li>
                <li className='mr-[10%] flex items-center ' ><a href='#Features' className='no-underline text-white hover:text-[#33BBCF]'>Features</a></li>
                <li className='  mr-[10%] flex items-center'><a href='#Solution' className='no-underline text-white hover:text-[#33BBCF]'>Solution</a></li>
            </ul>
           {style && <ul className=' flex flex-col justify-center items-center sm:hidden '>
                <li className='mr-[10%] hover:bg-white hover:bg-opacity-25 ' ><a href='#home' className='no-underline  text-white hover:text-[#33BBCF]'>Home</a></li>
                <hr/>
                <li className='mr-[10%] hover:bg-white hover:bg-opacity-25'><a href='#AboutUs' className='no-underline text-white hover:text-[#33BBCF]'>AboutUs</a></li>
                <li className='mr-[10%]  hover:bg-white hover:bg-opacity-25' ><a href='#Features' className='no-underline text-white hover:text-[#33BBCF]'>Features</a></li>
                <li className='  mr-[10%] hover:bg-white hover:bg-opacity-25'><a href='#Solution' className='no-underline text-white hover:text-[#33BBCF]'>Solution</a></li>
            </ul>}
        </nav>

    ) ; 
} 
export default NavBar ;