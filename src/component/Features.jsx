// import { useState } from "react";
import { useState } from "react"
import img2 from "../assets/images/icon-security.svg"
import img1 from "../assets/images/icon-collaboration.svg"
import img3 from "../assets/images/icon-access-anywhere.svg"
import img4 from "../assets/images/icon-access-anywhere.svg"
import Featurebox from "./Featurebox"



const Features =() =>{
    // const img1 = icon1;
    const [imges,setimages] = useState([
        {
            img:img3,
            title: "Acces your files,anywhere",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",

        },
        {
            img:img2,
            title: "Security you can trust",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
        },
        {
            img:img1,
            title: "Real-time collaboration",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
        },
        {
            img:img4,
            title: "Store any type of file",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sed beatae, laboriosam enim voluptatum quia.",
        },
    ])
    
//    
    return(
        <>
        <section className=" mt-[40px]">
        <div className=" container mx-auto">
         
           <div className="  flex flex-col  md:flex md:flex-row md:flex-wrap gap-3 pt-[30px] ">
          
           {
            imges.map((el)=>(
                <Featurebox img ={el.img} titel ={el.title} des= {el.desc}/>
            ))
            }
            </div>
          
        
        </div>   
        </section> 
        
        </>
    )
}
export default Features;