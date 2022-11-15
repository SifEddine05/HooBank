import Comment from "./comment";
import People1 from '../assets/people01.png'
import People2 from '../assets/people02.png'
import People3 from '../assets/people03.png'


const Avis = () => {
    const persons =[{Oui:true ,name:'Herman Jensen' ,text:'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.' ,job:'Founder & Leader' ,img:People1 } ,
    {Oui:false ,name:'Steve Mark' ,text:'Money makes your life easier. If you are lucky to have it, you are lucky.' ,job:'Founder & Leader' ,img:People2 },
    {Oui:false ,name:'Kenn Gallagher' ,text:'It is usually people in the money business, finance, and international trade that are really rich.' ,job:'Founder & Leader' ,img:People3 }]
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

        <div className=" flex justify-center ">
            {persons.map((elem)=> {
                   return( <Comment  name={elem.name} image={elem.img} job={elem.job}  text={elem.text} Oui={elem.Oui}  /> ) 
            }
             )}
            
        </div>
        
        <div>

        </div>
        
        <div>

        </div>
    </div>  );
}
 
export default Avis ;