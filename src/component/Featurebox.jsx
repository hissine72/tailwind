const Featurebox = ({img,titel,des})=>{
    return(
        <>
      
                
               <div className=" mb-7 w-[100%] md:w-[48%] text-center ">
                <img src={img} alt="" className="mx-auto"/>
                <h1 className=" text-white font-bold">{titel}</h1>
                <p className=" w-[300px] mx-auto text-[#fbffff] mt-[10px]">{des}</p>
                </div>
        </>        

    )
}
export default Featurebox;