import arrow from '../assets/arrow-up.svg'


const ArrowUp = () => {
    return (
        <div className='border-4 border-[#33BBCF] w-[140px] h-[140px] rounded-full flex justify-center'>
                <div className='flex justify-center w-[84px] h-[53px] m-auto '>
                    <h3 className='text-[18px] font-[500] text-[#FFFF] leading-[23.4px] text-center  flex items-center'>Get Started</h3>
                    <div className='w-[50px] h-[40px]   flex items-center' >
                        <img src= {arrow} alt='arrow img' className='w-full h-full'/> 
                    </div>
                </div>
        </div>    
);
}
 
export default ArrowUp ;