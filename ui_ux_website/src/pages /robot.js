import ArrowUp from './arrowUp';
import robot from '../assets/robot.png';
const Robot =()=>{
    return(
        <div className='flex justify-end'>
            <div className='w-[665px] h-[674px] mt-10 flex items-center order-3'>
              <img src= {robot}  alt='robot img' className='w-full h-full'/> 
            </div>

            <div className='flex items-center order-2 '>
                <ArrowUp />
            </div>
            <div className='flex items-center order-1 ml-20 '>
                <div className='flex-col'>
                    <div className='w-[380px]  bg-[#272727] rounded-full shadow-xl'>
                        <p className='text-[18px] font-[400] text-[#FFFF] leading-[27px] p-auto text-center '> 20%<span className='opacity-50'>DISCOUNT FOR</span> 1 MONTH <span className='opacity-50' >ACCOUNT</span></p>
                    </div>
                    <div className='w-[670px] h-[303px] mt-5'>
                        <p className='text-[72px] font-[600] text-[#FFFF] text-left leading-[100px]'>
                            The Next <br/> <span className='text-[#33BBCF]'>Generation </span> Payment method
                        </p>
                    </div> 
                    <div className='mt-5'>
                        <p className='text-[18px] font-[400] text-[#FFFF] text-left leading-[30.6px] opacity-75'>
                            Our team of experts uses a methodology to identify <br/>
                            the credit cards most likely to fit your needs. <br />
                            We examine annual percentage rates, annual fees. 
                        </p>
                    </div>
                </div>
               
            </div>
        </div>    
    );
}

export default Robot ;