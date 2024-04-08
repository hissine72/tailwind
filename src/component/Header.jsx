import { useState } from "react";
import img1 from "../assets/images/logo.svg"

const Header = ()=>{
 
 
  const[list,setlist] = useState(["home","about","features"])
    return(
        <>
        <header className="  py-[20px]	">
          <div className="container ml-[] flex justify-center justify-between	items-center mr-auto ml-auto  " >
            <div className=" pl-[15px] ">
              <a className=" text-[#9198a0]	cursor-pointer	" >logo</a>
            </div>
            <nav>
              <ul className= " text-[#9198a0] flex	"  >
               {list.map((el)=>(  
                <li className="cursor-pointer px-[10px] hover:underline hover:text-white " >{el}</li>
               ))}
              </ul>
            </nav>
           
          </div>  
        </header>


          
     
          

        </>
    )
 }
 export default Header;