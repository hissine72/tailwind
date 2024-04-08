import img1 from "../assets/images/illustration-stay-productive.png"
import img2 from "../assets/images/icon-arrow.svg"

const Stayproductive = ()=>{
    return(
        <>
        <section>
            <div className=" container  mx-auto">
                <div className=" flex flex-col md:flex-row gap-14 pt-[30px] content-center justify-center ">
                <div className=" w-[300px] md:w-[600px] mx-auto">
                    <img src={img1} alt="" className=" max-w-full mx-auto"/>
                </div>
                <div className="w-500px  mx-auto pt-[60px]" >
                    <div>
                        <h1 className=" text-white font-bold text-[30px] pb-[5px]">Stay productive,</h1>
                        <h1 className=" text-white font-bold text-[30px] pb-[5px]">wherever you are</h1>
                    </div>
                    <div>
                        <p className="text-[#b7bcc2] w-[400px] pt-[10px] md:w-[100%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                              excepturi incidunt quo deserunt quidem accusamus iure ab earum
                               reprehenderit debitis!
                        </p >
                        <p className="text-[#b7bcc2] w-[400px] pt-[10px] md:w-[100%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
                                excepturi incidunt quo deserunt quidem accusamus iure ab earum
                                 reprehenderit debitis!
                        </p>
                    </div>
                    <div className=" flex mt-[10px]">
                        <a className=" text-[#fff]"> See how Fylo works</a>
                        <img src={img2} alt="" className=" cursor-pointer ml-[5px]" />
                    </div>
                </div>
                </div>

            </div>


        </section>
       
        </>
    )
}
export default Stayproductive;