//import './index.css';
import logo from '../assets/logo.svg' ;
const NavBar= ()=> {

    return (
      <nav className="w-full flex justify-between " >
            <img src={logo} alt="logo"  className='w-[124px] h-[32px] ml-[9.88%]'/>
            <ul className="flex  mr-[10%] flex-end  ">
                <li className='mr-[10%]   flex items-center ' ><a href='#home' className='no-underline  text-white hover:text-[#33BBCF]'>Home</a></li>
                <li className='mr-[10%]  flex items-center'><a href='#AboutUs' className='no-underline text-white hover:text-[#33BBCF]'>AboutUs</a></li>
                <li className='mr-[10%] flex items-center ' ><a href='#Features' className='no-underline text-white hover:text-[#33BBCF]'>Features</a></li>
                <li className='  mr-[10%] flex items-center'><a href='#Solution' className='no-underline text-white hover:text-[#33BBCF]'>Solution</a></li>
            </ul>
        </nav>

    ) ; 
} 
export default NavBar ;