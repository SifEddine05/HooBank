
import Star from '../assets/Star.svg'
import Sheild from '../assets/Shield.svg'
import Send from '../assets/Send.svg'

const Busniess = ()=>{

    return (
        <div>
            <div className='h-5  sm:h-10 md:h-15 lg:h-20'></div>  
            <div className="flex justify-around items-center ">
                <div className="flex flex-col justify-around items-start ml-4 md:ml-8 sm:ml-6 lg:ml-10 w-[50%] ">
                    <h2 className=" text-[18px] sm:text-[28px] md:text-[38px] lg:text-[48px] text-[#FFFF] font-semiblod mt-2 md:mt-4 sm:mt-3 lg:mt-5">You do the business, <br/> we’ll handle the money.</h2>
                    <p className="text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] text-[#FFFF] opacity-75 mt-2 md:mt-4 sm:mt-3 lg:mt-5">With the right credit card, you can improve your financial life by <br/> building credit, earning rewards and saving money. But with <br/> hundreds of credit cards on the market.</p>
                    <button className="rounded bg-[#33BBCF]  mt-2 md:mt-4 sm:mt-3 lg:mt-5  text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px]  w-[40px] sm:w-[80px] md:w-[120px] lg:w-[160px] h-[28px] sm:h-[38px] md:h-[48px] lg:h-[58px] drop-shadow-xl hover:text-white" >Get Started</button>
                </div>
                <div className="flex flex-col justify-around items-start w-[35%]">
                    <div className="flex justify-around items-center">
                        <div className="rounded-full bg-[#09977C] bg-opacity-25 w-[23%] h-[20px] md:h-[40px] sm:h-[30px] lg:h-[64px] ">
                            <img src={Star} alt="star img" className=' w-[50%] h-[50%] mt-[25%] ml-[25%]'/>   
                        </div>
                        <div className='ml-2 md:ml-4 sm:ml-3 lg:ml-5'>
                            <h3 className='text-[6px] sm:text-[10px] md:text-[14px] lg:text-[18px] text-[#FFFF] '>
                                Rewards 
                            </h3>
                            <p className='text-[6px] sm:text-[10px] md:text-[14px] lg:text-[18px] text-[#FFFF] opacity-75'>
                                The best credit cards offer some tantalizing combinations of promotions and prizes
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-around items-center  mt-4 md:mt-8 sm:mt-6 lg:mt-10 bg-[#42475B] rounded-lg  bg-opacity-75  h-30px sm:h-[60px] md:h-[80px] lg:h-[100px]">
                        <div className="rounded-full bg-[#09977C] bg-opacity-25 w-[23%] h-[20px] md:h-[40px] sm:h-[30px] lg:h-[64px] ml-1 drop-shadow-[0_20px_100px_[#42475B]">
                          <img src={Sheild} alt="star img" className=' w-[50%] h-[50%] mt-[25%] ml-[25%]'/>
                        </div>
                        <div className='ml-2 md:ml-4 sm:ml-3 lg:ml-5'>
                            <h3 className='text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] text-[#FFFF] '>
                            100% Secured 
                            </h3>
                            <p className='text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] text-[#FFFF] opacity-75'>
                            We take proactive steps make sure your information and transactions are secure.                            </p>
                        </div>
                    </div>

                    <div className="flex justify-around items-center mt-4 md:mt-8 sm:mt-6 lg:mt-10 ">
                        <div className="rounded-full bg-[#09977C] bg-opacity-25 w-[23%] h-[20px] md:h-[40px] sm:h-[30px] lg:h-[64px] ">
                          <img src={Send} alt="star img" className=' w-[50%] h-[50%] mt-[25%] ml-[25%]'/>
                        </div>
                        <div className='ml-2 md:ml-4 sm:ml-3 lg:ml-5'>
                            <h3 className='text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] text-[#FFFF] '>
                                Balance Transfer 
                            </h3>
                            <p className='text-[8px] sm:text-[10px] md:text-[14px] lg:text-[18px] text-[#FFFF] opacity-75'>
                            A balance transfer credit card can save you a lot of money in interest charges.                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        
    );
}
export default Busniess ;