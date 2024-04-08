const Testemonilasbox =({des,name,img,position})=>{
    return(
        <>
        <div  className=" pl-[15px] w-[85%] mx-auto md:w-[350px]  bg-[#21293c]">         
        <div>
             <p className=" text-white">{des}</p>     
         </div>
         <div className=" flex mt-[10px]">
            <div className=" w-[50px]"> 
                <img src={img} alt="" className=" max-w-full rounded-[50%]" />
            </div>
            <div className=" ml-[9px]">
                <h1 className=" text-[#dbe1ef]">{name}</h1>
                <p className=" text-[#5d6771]">{position}</p>
            </div>


         </div>
         </div>

        </>
    )
}
export default Testemonilasbox;