import { useState } from "react";
import img1 from "../assets/images/profile-1.jpg"
import img2 from "../assets/images/profile-2.jpg"
import img3 from "../assets/images/profile-3.jpg"
import img4 from "../assets/images/bg-quotes.png"
import Testemonilasbox from "./Testemonilasbox";

const Testemonilas = ()=>{

    const [data,setData] = useState([
        {
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
            name:"Ahmed",
            img: img1 ,
            position:"Founder & CEO, Huddle",

        },
        {
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
            name:"Mohamed",
            img: img2 ,
            position:"Founder & CEO, Huddle",

        },
        {
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
            name:"Eman",
            img: img3 ,
            position:"Founder & CEO, Huddle",

        },
    ])


    return(
        <>
        <section>
            <div className="container  mx-auto mt-[160px]">
                <div className=" relative z-[1] left-[]">
                    <img src={img4} alt="" className=" absolute left-[19px]  md:left-[20px] bottom-[-15px]" />
                </div>
                <div className=" flex flex-col md:flex-row gap-7 justify-center  relative z-10 ">
                    {
                        data.map((el)=>(

                            <Testemonilasbox  des = {el.des} name ={el.name} img= {el.img} position={el.position}/>


                        ))
                    }


                </div>


            </div>

        </section>


        </>
    )
}
export default Testemonilas;