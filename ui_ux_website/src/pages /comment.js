import Quotes from '../assets/quotes.svg'
import People1 from '../assets/people01.png'
const Comment = () => {
    return ( 
    <div className='w-[20%]  bg-[#6D6D6D] bg-opacity-25 rounded-lg'>
       <div className='lg:p-4 md:p-3 sm:p-2 p-1'>
            <img src={Quotes} alt="quotes" className= "lg:w-[40px] md:w-[30px] sm:w-[20px] w-[10px] md:pt-4 sm:pt-3 pt-2 lg:pt-5" />
            <p className='text-[#FFFF] text-[6px] sm:text-[10px] md:text-[14px] lg:text-[18px] opacity-90 md:mt-4 sm:mt-3 mt-2 lg:mt-5'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
        
            <div className='flex justify-start mt-2 md:mt-4 sm:mt-3 pb-2 md:pb-4 sm:pb-3  lg:pb-5'>
                <div className='lg:mr-3 md:mr-2 sm:mr-1 mr-1 '>
                    <img src={People1} alt="people01" className='lg:w-[48px] md:w-[38px] sm:w-[28px] w-[18px]' />
                </div>
                <div>
                    <h4 className='text-[#FFFF] lg:text-[20px] md:text-[15px] sm:text-[10px] text-[5px] '>Herman Jensen</h4>
                    <p className='text-[#FFFF] lg:text-[16px] md:text-[13px] sm:text-[10px] text-[8px] opacity-75 '>Founder & Leader</p>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Comment;