import ArrowUp from './arrowUp';
import robot from '../assets/robot.png';
import Discount from '../assets/Discount.svg';

const Robot =()=>{
    return(
        <div className='flex justify-end items-center pt-20'>
            <div className=' w-[260px] md:w-[360x] lg:w-[460px]  mt-5 flex items-center order-3'>
              <img src= {robot}  alt='robot img' className='w-full h-full'/> 
            </div>

            <div className='w-[55px] h-[55px] order-2 md:w-[100px] md:h-[100px] lg:w-[140px] lg:h-[140px] '>
                <ArrowUp />
            </div>
            <div className='flex items-center order-1  ml-10  w-[50%]  '>
                <div className='flex-col justify-start '>
                    <div className='   w-[47.76%]  bg-[#272727] rounded-full shadow-xl flex justify-start items-center '>
                        <img src={Discount} alt="discount " className=':w-[15px] h-[15px] md:w-[22px] md:h-[22px] lg:w-[32px] lg:h-[32px]'/>
                        <p className='text-[0.36rem]   md:text-[0.6rem] lg:text-[0.75rem] font-[400] text-[#FFFF] leading-[1.688rem] p-auto text-center  sm:text-[1,125rem] '> 20%<span className='opacity-50'>DISCOUNT FOR</span> 1 MONTH <span className='opacity-50' >ACCOUNT</span></p>
                    </div>
                    <div className='w-[100%] h-[62.89%] mt-5'>
                        <p className='text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] font-[600] text-[#FFFF] text-left lg:leading-[6.25rem] md:leading-[5.25rem]'>
                            The Next <br/> <span className='text-[#33BBCF]'>Generation </span> <br/>Payment method
                        </p>
                    </div> 
                    <div className='mt-5'>
                        <p className='text-[0.75rem] md:text-[0.9rem] lg:text-[1.125rem] font-[400] text-[#FFFF] text-left lg:leading-[1.913rem] md:leading-[1.6rem] opacity-75'>
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