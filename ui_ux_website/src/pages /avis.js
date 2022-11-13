import Comment from "./comment";

const Avis = () => {
    return (
    <div>
        <div className='h-5  sm:h-10 md:h-15 lg:h-20'></div> 
        <div className='flex justify-center items-center mr-5 ml-5 md:ml-15 sm:ml-10 lg:ml-20 md:mr-15 sm:mr-10 lg:mr-20'>
            <div className=" flex justify-center">
                <h3 className=" text-[18px] md:text-[38px] sm:text-[28px] lg:text-[48px] text-[#FFFF]  w-[75%] ">What people are saying about us</h3>
            </div>
            <div className="  flex justify-center">
                <p className="text-[8px] md:text-[10px] sm:text-[14px] lg:text-[18px] text-[#FFFF] opacity-75 w-[75%] ">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
        </div>
        
        <div className='h-3  sm:h-5 md:h-8 lg:h-10'></div>

        <div>
            <Comment />
        </div>
        
        <div>

        </div>
        
        <div>

        </div>
    </div>  );
}
 
export default Avis ;