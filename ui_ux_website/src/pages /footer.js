import logo from '../assets/logo.svg'
import FooterText from './footerTexts';

const title1='Usefull Links' ;
const title2 ='Community';
const title3 ='Partner';
const text1 =['Content','How it Works','Create','Explore','Terms & Services']
const text2 =['Help Center','Partners','Suggestions','Blog','Newsletters']
const text3 =['Our Partner','Become a Partner']
const elements =[{title: title1 , text: text1} ,{title:title2 ,text: text2},{title:title3 , text:text3}]
console.log(elements)
const Footer = () => {
    return (
    <div>
        <div className='h-5  sm:h-10 md:h-15 lg:h-20'></div> 
        <div className='flex justify-around mx-10'>
            <div className='w-[30%] self-center'>
                <img src={logo} alt="logo " className='w-[75%] lg:mb-5 md:mb-4 sm;mb-3 mb-2 ' />
                <p className="  text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] text-[#FFFF] opacity-75 mt-2 md:mt-4 sm:mt-3 lg:mt-5">A new way to make the payments easy, reliable and secure.</p>
            </div>
            
            { elements.map((elem)=>{
                return(<FooterText title={elem.title} text={elem.text} />);
            }
            )}
                
            

        </div>
 



    </div>
 );
}
 
export default Footer ;